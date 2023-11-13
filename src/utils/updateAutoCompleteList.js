import InputType from "../types/InputType.js";
import getFoodDatas from "./getFoodDatas.js";

export default function updateAutoCompleteList(searchTerm) {
  const foodNameInput = document.getElementById("food-name-input");
  const autoCompleteList = document.getElementById("auto-complete-list");
  const calorieInput = document.getElementById("food-calorie-input");
  const proteinInput = document.getElementById("food-protein-input");
  const carbInput = document.getElementById("food-carb-input");
  const fatInput = document.getElementById("food-fat-input");
  const gramsInput = document.getElementById("food-grams-input");
  const toggleCheckbox = document.getElementById("input-type");

  const selectedFoodIdInput = document.getElementById("selected-food-id");

  const [_foodRecords, foodItems] = getFoodDatas();

  // Filter food items based on the search term
  const filteredFoodItems = foodItems.filter((item) =>
    item.foodName.toLowerCase().includes(searchTerm)
  );

  // Populate the auto-complete list
  autoCompleteList.innerHTML = "";
  filteredFoodItems.forEach((item) => {
    const listItem = document.createElement("div");

    // Food name on one line
    const foodNameLine = document.createElement("div");
    foodNameLine.innerHTML = `<span class="auto-complete-food-name ${
      item.inputType === InputType.per100Grams
        ? "food-name-color-per-100-grams"
        : "food-name-color-per-serving"
    }">${item.foodName}</span>`;
    listItem.appendChild(foodNameLine);

    // Nutrient values as separate elements
    const nutrientLine = document.createElement("div");
    nutrientLine.innerHTML = `<span class="auto-complete-calorie">${
      item.calorie ? `kcal:${item.calorie}` : ""
    }</span>
    <span class="auto-complete-protein">${
      item.protein ? `p:${item.protein}` : ""
    }</span>
    <span class="auto-complete-carb">${
      item.carb ? `hh:${item.carb}` : ""
    }</span>
    <span class="auto-complete-fat">${item.fat ? `r:${item.fat}` : ""}</span>
    <span class="auto-complete-grams">${
      item.grams ? `g:${item.grams}` : ""
    }</span>`;
    listItem.appendChild(nutrientLine);

    // Event handler for item click
    listItem.addEventListener("click", () => {
      // Set the selected foodId
      selectedFoodIdInput.value = item.foodId;

      foodNameInput.value = item.foodName;
      calorieInput.value = item.calorie;
      proteinInput.value = item.protein;
      carbInput.value = item.carb;
      fatInput.value = item.fat;
      gramsInput.value = item.grams;

      // toggle input type
      toggleCheckbox.checked = item.inputType === InputType.perServing;

      // Remove focus
      foodNameInput.blur();
    });

    autoCompleteList.appendChild(listItem);
  });
}
