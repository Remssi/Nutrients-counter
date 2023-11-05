import displayFoodDatas from "./display/displayFoodDatas.js";
import displaySelectedDate from "./display/displaySelectedDate.js";
import onToggleInputType from "./display/onToggleInputType.js";
import onFormSubmit from "./handlers/onFormSubmit.js";
import { setSelectedDate } from "./selectedDate.js";
import updateInputTypelessDatas from "./utils/updateInputTypelessDatas.js";

document.addEventListener("DOMContentLoaded", function () {
  // update food datas without input type to per serving
  updateInputTypelessDatas();

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
});
