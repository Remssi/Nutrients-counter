import displayFoodDatas from "./display/displayFoodDatas.js";
import displaySelectedDate from "./display/displaySelectedDate.js";
import onToggleInputType from "./display/onToggleInputType.js";
import onAnyInputChange from "./handlers/onAnyInputChange.js";
import onFoodNameInputBlur from "./handlers/onFoodNameInputBlur.js";
import onFoodNameInputFocus from "./handlers/onFoodNameInputFocus.js";
import onFoodNameInputKeyup from "./handlers/onFoodNameInputKeyup.js";
import onFormSubmit from "./handlers/onFormSubmit.js";
import { setSelectedDate } from "./selectedDate.js";
import convertFoodDatasToFoodItems from "./utils/convertFoodDatasToFoodItems.js";

document.addEventListener("DOMContentLoaded", function () {
  convertFoodDatasToFoodItems();

  displaySelectedDate();
  displayFoodDatas();

  // Get the form element
  const form = document.getElementById("food-form");
  // Add a submit event listener to the form
  form.addEventListener("submit", function (event) {
    onFormSubmit(event);
  });

  const previousDayButton = document.querySelector(".previous-day-button");
  previousDayButton.addEventListener("click", function () {
    setSelectedDate("previous");
  });

  const nextDayButton = document.querySelector(".next-day-button");
  nextDayButton.addEventListener("click", function () {
    setSelectedDate("next");
  });

  const toggleCheckbox = document.getElementById("input-type");
  toggleCheckbox.addEventListener("change", onToggleInputType);

  // autocomplete input
  const foodNameInput = document.getElementById("food-name-input");

  // Event handler for input focus
  foodNameInput.addEventListener("focus", onFoodNameInputFocus);

  // Event handler for input blur
  foodNameInput.addEventListener("blur", onFoodNameInputBlur);

  // Event handler for input keyup
  foodNameInput.addEventListener("keyup", onFoodNameInputKeyup);

  // Event handler for all inputs to clear selected food id, if changed
  const calorieInput = document.getElementById("food-calorie-input");
  const proteinInput = document.getElementById("food-protein-input");
  const carbInput = document.getElementById("food-carb-input");
  const fatInput = document.getElementById("food-fat-input");
  const gramsInput = document.getElementById("food-grams-input");

  foodNameInput.addEventListener("change", onAnyInputChange);
  calorieInput.addEventListener("change", onAnyInputChange);
  proteinInput.addEventListener("change", onAnyInputChange);
  carbInput.addEventListener("change", onAnyInputChange);
  fatInput.addEventListener("change", onAnyInputChange);
  gramsInput.addEventListener("change", onAnyInputChange);
  toggleCheckbox.addEventListener("change", onAnyInputChange);
});
