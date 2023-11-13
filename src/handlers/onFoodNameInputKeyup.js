import updateAutoCompleteList from "../utils/updateAutoCompleteList.js";

export default function onFoodNameInputKeyup() {
  const foodNameInput = document.getElementById("food-name-input");

  const searchTerm = foodNameInput.value.toLowerCase();
  updateAutoCompleteList(searchTerm);
}
