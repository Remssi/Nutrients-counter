import updateAutoCompleteList from "../utils/updateAutoCompleteList.js";

export default function onFoodNameInputFocus() {
  const autoCompleteList = document.getElementById("auto-complete-list");

  // Add border when autocomplete is open
  autoCompleteList.style.border = "1px solid #ccc";

  updateAutoCompleteList("");
}
