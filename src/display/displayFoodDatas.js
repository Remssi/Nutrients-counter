import displayTotalFoodNutrients from "./displayTotalFoodNutrients.js";
import getFilteredFoodDatas from "../utils/getFilteredFoodDatas.js";
import onDeleteButtonClick from "../handlers/onDeleteButtonClick.js";

export default function displayFoodDatas() {
  const filteredData = getFilteredFoodDatas();

  // Get the table body element
  const tableBody = document.querySelector(".selected-days-foods-table tbody");

  // Clear existing rows
  tableBody.innerHTML = "";

  // Create table rows for the filtered data
  filteredData.forEach((food) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${food.foodName}</td>
        <td>${food.calorie}</td>
        <td>${food.protein}</td>
        <td>${food.carb}</td>
        <td>${food.fat}</td>
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
