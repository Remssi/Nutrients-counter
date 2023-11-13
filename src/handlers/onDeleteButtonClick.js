import displayTotalFoodNutrients from "../display/displayTotalFoodNutrients.js";
import getFoodDatas from "../utils/getFoodDatas.js";
import setFoodDatas from "../utils/setFoodDatas.js";

export default function onDeleteButtonClick(food, row) {
  // Access the timestamp associated with the row (assuming it's food.time)
  const rowTimestamp = food.time;

  const [foodRecords] = getFoodDatas();

  // Filter out the row with the corresponding timestamp
  const updatedFoodRecords = foodRecords.filter(
    (item) => item.time !== rowTimestamp
  );

  setFoodDatas(updatedFoodRecords);

  // Remove the row from the table
  row.remove();

  displayTotalFoodNutrients();
}
