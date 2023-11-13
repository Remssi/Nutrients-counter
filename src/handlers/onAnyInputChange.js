export default function onAnyInputChange() {
  const selectedFoodIdInput = document.getElementById("selected-food-id");

  // Reset selected foodId when any other input is changed
  selectedFoodIdInput.value = "";
}
