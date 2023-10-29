import displayTotalFoodNutrients from "../display/displayTotalFoodNutrients.js";

export default function onDeleteButtonClick(food, row) {
  // Access the timestamp associated with the row (assuming it's food.time)
  const rowTimestamp = food.time;

  // Get the food data from localStorage
  const storedFoodData = JSON.parse(localStorage.getItem("foodData")) || [];

  // Filter out the row with the corresponding timestamp
  const updatedFoodData = storedFoodData.filter(
    (item) => item.time !== rowTimestamp
  );

  // Update the localStorage with the filtered data (removed row)
  localStorage.setItem("foodData", JSON.stringify(updatedFoodData));

  // Remove the row from the table
  row.remove();

  displayTotalFoodNutrients();
}
