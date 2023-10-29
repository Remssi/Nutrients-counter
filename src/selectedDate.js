import displayFoodDatas from "./display/displayFoodDatas.js";
import displaySelectedDate from "./display/displaySelectedDate.js";
import getDateFromLocaleString from "./utils/getDateFromLocaleString.js";

let selectedDate = new Date().toLocaleString("fi");

function setSelectedDate(action) {
  const dateObject = getDateObjectFromSelectedDate();
  // Subtract or add one day
  if (action === "previous") {
    dateObject.setDate(dateObject.getDate() - 1);
  } else {
    dateObject.setDate(dateObject.getDate() + 1);
  }

  selectedDate = dateObject.toLocaleString("fi");

  displaySelectedDate();
  displayFoodDatas();
}

function getSelectedDate() {
  return selectedDate;
}

function getDateObjectFromSelectedDate() {
  // Split the date string into day, month, and year
  const [day, month, year] = getDateFromLocaleString(selectedDate).split(".");
  // Create a new Date object (Note: month in Date object is 0-indexed, so subtract 1 from the month)
  const dateObject = new Date(year, month - 1, day);
  return dateObject;
}

export { setSelectedDate, getSelectedDate, getDateObjectFromSelectedDate };
