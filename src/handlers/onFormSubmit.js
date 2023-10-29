import displayFoodDatas from "../display/displayFoodDatas.js";
import { getDateObjectFromSelectedDate } from "../selectedDate.js";

export default function onFormSubmit(event) {
  event.preventDefault();

  // Get the input values
  const foodName = document.getElementById("food-name-input").value;
  const calorie = document.getElementById("food-calorie-input").value;
  const protein = document.getElementById("food-protein-input").value;
  const carb = document.getElementById("food-carb-input").value;
  const fat = document.getElementById("food-fat-input").value;

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
  };

  // Retrieve existing food data from local storage or initialize an empty array
  let existingFoodDatas = JSON.parse(localStorage.getItem("foodData")) || [];

  // Append the new food data to the existing list
  existingFoodDatas.push(foodData);

  // Store the updated list in local storage as a JSON string
  localStorage.setItem("foodData", JSON.stringify(existingFoodDatas));

  // Reset the form after submission (optional)
  document.getElementById("food-form").reset();

  displayFoodDatas();
}
