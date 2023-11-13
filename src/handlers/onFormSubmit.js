import displayFoodDatas from "../display/displayFoodDatas.js";
import { getDateObjectFromSelectedDate } from "../selectedDate.js";
import InputType from "../types/InputType.js";
import generateUniqueId from "../utils/generateUniqueId.js";
import getFoodDatas from "../utils/getFoodDatas.js";
import setFoodDatas from "../utils/setFoodDatas.js";

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

  const selectedFoodId = document.getElementById("selected-food-id").value;

  const dateObject = getDateObjectFromSelectedDate();

  // Get the current time in milliseconds
  const currentTime = Date.now();

  // Set the time of the new Date object to the current time
  dateObject.setHours(new Date(currentTime).getHours());
  dateObject.setMinutes(new Date(currentTime).getMinutes());
  dateObject.setSeconds(new Date(currentTime).getSeconds());

  const foodId = selectedFoodId ? selectedFoodId : generateUniqueId();

  const newFoodRecord = {
    time: dateObject.toLocaleString("fi"),
    foodId,
  };

  const [foodRecords, foodItems] = getFoodDatas();

  // Append the new food data to the existing lists
  foodRecords.push(newFoodRecord);

  // if food was selected from autocomplete, use it and don't add new food item
  if (!selectedFoodId) {
    const newFoodItem = {
      foodId,
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

    foodItems.push(newFoodItem);
  }

  setFoodDatas(foodRecords, foodItems);

  // Reset the form after submission (optional)
  document.getElementById("food-form").reset();

  const inputTypeCheckbox = document.getElementById("input-type");
  inputTypeCheckbox.checked = inputTypeIsServing;

  displayFoodDatas();
}
