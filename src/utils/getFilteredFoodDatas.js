import getDateFromLocaleString from "./getDateFromLocaleString.js";
import { getSelectedDate } from "../selectedDate.js";
import getFoodDatas from "./getFoodDatas.js";
import mapFoodRecordsToFoodItems from "./mapFoodRecordsToFoodItems.js";

// TODO: rename
export default function getFilteredFoodDatas() {
  // Get food data from localStorage
  const [foodRecords, foodItems] = getFoodDatas();

  const foodDatas = mapFoodRecordsToFoodItems(foodRecords, foodItems);

  // Filter foodData for the selected date
  const filteredData = foodDatas.filter((food) => {
    const dateOnly = getDateFromLocaleString(food.time); // Extracting only date without time
    return dateOnly === getDateFromLocaleString(getSelectedDate());
  });

  return filteredData;
}
