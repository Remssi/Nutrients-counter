import onCopyButtonClick from "../handlers/onCopyButtonClick.js";
import { getSelectedDate } from "../selectedDate.js";
import getDateFromLocaleString from "../utils/getDateFromLocaleString.js";
import getFilteredFoodDatas from "../utils/getFilteredFoodDatas.js";

export default function displayTotalFoodNutrients() {
  const filteredData = getFilteredFoodDatas();

  // Get the table body
  const totalTableBody = document.querySelector(
    ".selected-days-total-nutrients-table tbody"
  );

  // Set default row
  totalTableBody.innerHTML = `
    <td>Yhteensä</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  `;

  if (filteredData.length === 0) return;

  // Clear existing rows
  totalTableBody.innerHTML = ``;

  // Calculate the totals for each nutrient
  const totalCalories = calculateTotal(filteredData, "calorie");
  const totalProtein = calculateTotal(filteredData, "protein");
  const totalCarb = calculateTotal(filteredData, "carb");
  const totalFat = calculateTotal(filteredData, "fat");

  // Function to calculate total for a specific nutrient, handling NaN values
  function calculateTotal(filteredData, nutrient) {
    return filteredData.reduce((acc, food) => {
      const parsedValue = parseInt(food[nutrient]);
      return isNaN(parsedValue) ? acc : acc + parsedValue;
    }, 0);
  }
  // Create a new row for the total
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Yhteensä</td>
    <td>${totalCalories}</td>
    <td>${totalProtein}</td>
    <td>${totalCarb}</td>
    <td>${totalFat}</td>
    <td></td>
  `;

  // Construct the text to be copied
  const textToCopy = `${getDateFromLocaleString(
    getSelectedDate()
  )} ravintoaineet: ${totalCalories} kcal, ${totalProtein}g proteiinia, ${totalCarb}g hiilihydraattia, ${totalFat}g rasvaa.`;

  // Create the button element
  const copyButton = document.createElement("button");
  copyButton.textContent = "Kopioi";

  // Append the button to the last <td> in the total row
  totalRow.lastElementChild.appendChild(copyButton);

  // Add a click event listener to the button to copy the text
  copyButton.addEventListener("click", () => {
    onCopyButtonClick(textToCopy);
  });

  // Append the total row to the table body
  totalTableBody.appendChild(totalRow);
}
