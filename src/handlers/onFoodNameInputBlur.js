export default function onFoodNameInputBlur() {
  const autoCompleteList = document.getElementById("auto-complete-list");

  // Delay hiding the auto-complete list to handle the click on the list item
  setTimeout(() => {
    autoCompleteList.innerHTML = "";

    // Remove border when autocomplete is closed
    autoCompleteList.style.border = "none";
  }, 50);
}
