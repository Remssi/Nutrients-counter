import displayFoodDatas from "../display/displayFoodDatas.js";
import { getDateObjectFromSelectedDate } from "../selectedDate.js";
import InputType from "../types/InputType.js";
import getAllFoodDatas from "../utils/getAllFoodDatas.js";
import setAllFoodDatas from "../utils/setAllFoodDatas.js";

export default function onFormSubmit(event) {
  event.preventDefault();

  // Get the input values
  const inputTypeIsServing = document.getElementById("input-type").checked;
  const foodName = document.getElementById("food-name-input").value;
  const calorie = document.getElementById("food-calorie-input").value;
  const protein = document.getElementById("food-protein-input").value;
  const carb = document.getElementById("food-carb-input").value;
  const fat = document.getElementById("food-fat-input").value;
  const grams = document.getElementById("food-grams-input").value;

  const dateObject = getDateObjectFromSelectedDate();

  // Get the current time in milliseconds
  const currentTime = Date.now();

  // Set the time of the new Date object to the current time
  dateObject.setHours(new Date(currentTime).getHours());
  dateObject.setMinutes(new Date(currentTime).getMinutes());
  dateObject.setSeconds(new Date(currentTime).getSeconds());

  // Create an object with the input values
  const foodData = {
    time: dateObject.toLocaleString("fi"),
    foodName,
    calorie,
    protein,
    carb,
    fat,
    grams,
    inputType: inputTypeIsServing
      ? InputType.perServing
      : InputType.per100Grams,
  };

  // Retrieve existing food data from local storage or initialize an empty array
  const existingFoodDatas = getAllFoodDatas();

  // Append the new food data to the existing list
  existingFoodDatas.push(foodData);

  setAllFoodDatas(existingFoodDatas);

  // Reset the form after submission (optional)
  document.getElementById("food-form").reset();

  const inputTypeCheckbox = document.getElementById("input-type");
  inputTypeCheckbox.checked = inputTypeIsServing;

  displayFoodDatas();
}
