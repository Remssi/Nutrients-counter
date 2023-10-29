import displayFoodDatas from "./display/displayFoodDatas.js";
import displaySelectedDate from "./display/displaySelectedDate.js";
import onFormSubmit from "./handlers/onFormSubmit.js";
import { setSelectedDate } from "./selectedDate.js";

document.addEventListener("DOMContentLoaded", function () {
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
});
