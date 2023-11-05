import displayTotalFoodNutrients from "./displayTotalFoodNutrients.js";
import getFilteredFoodDatas from "../utils/getFilteredFoodDatas.js";
import onDeleteButtonClick from "../handlers/onDeleteButtonClick.js";
import calculateNutrientValues from "../utils/calculateNutrientValues.js";
import InputType from "../types/InputType.js";

export default function displayFoodDatas() {
  const filteredData = getFilteredFoodDatas();

  // Get the table body element
  const tableBody = document.querySelector(".selected-days-foods-table tbody");

  // Clear existing rows
  tableBody.innerHTML = "";

  // Create table rows for the filtered data
  filteredData.forEach((food) => {
    const row = document.createElement("tr");

    const { calorie, protein, carb, fat } = calculateNutrientValues(food);
    row.innerHTML = `
        <td class=${
          food.inputType === InputType.per100Grams
            ? "food-name-color-per-100-grams"
            : "food-name-color-per-serving"
        }>${food.foodName}</td>
        <td>${calorie}</td>
        <td>${protein}</td>
        <td>${carb}</td>
        <td>${fat}</td>
        <td>${food.grams ?? ""}</td>
        <td><button class="delete-button">X</button></td>
      `;
    tableBody.appendChild(row);

    // Get the button element from the row
    const deleteButton = row.querySelector(".delete-button");

    // Add a click event to the delete button
    deleteButton.addEventListener("click", function () {
      onDeleteButtonClick(food, row);
    });
  });

  displayTotalFoodNutrients();
}
