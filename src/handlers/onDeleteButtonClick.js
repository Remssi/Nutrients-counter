import displayTotalFoodNutrients from "../display/displayTotalFoodNutrients.js";
import getAllFoodDatas from "../utils/getAllFoodDatas.js";
import setAllFoodDatas from "../utils/setAllFoodDatas.js";

export default function onDeleteButtonClick(food, row) {
  // Access the timestamp associated with the row (assuming it's food.time)
  const rowTimestamp = food.time;

  // Get the food data from localStorage
  const storedFoodData = getAllFoodDatas();

  // Filter out the row with the corresponding timestamp
  const updatedFoodData = storedFoodData.filter(
    (item) => item.time !== rowTimestamp
  );

  setAllFoodDatas(updatedFoodData);

  // Remove the row from the table
  row.remove();

  displayTotalFoodNutrients();
}
