import getDateFromLocaleString from "../utils/getDateFromLocaleString.js";
import { getSelectedDate } from "../selectedDate.js";

export default function displaySelectedDate() {
  document.querySelector(".selected-day-text").innerHTML =
    getDateFromLocaleString(getSelectedDate());
}
