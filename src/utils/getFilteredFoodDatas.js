import getDateFromLocaleString from "./getDateFromLocaleString.js";
import { getSelectedDate } from "../selectedDate.js";
import getAllFoodDatas from "./getAllFoodDatas.js";

export default function getFilteredFoodDatas() {
  // Get food data from localStorage
  const foodDatas = getAllFoodDatas();

  // Filter foodData for the selected date
  const filteredData = foodDatas.filter((food) => {
    const dateOnly = getDateFromLocaleString(food.time); // Extracting only date without time
    return dateOnly === getDateFromLocaleString(getSelectedDate());
  });

  return filteredData;
}
