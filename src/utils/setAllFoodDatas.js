export default function setAllFoodDatas(newFoodDatas) {
  // Store the updated list in local storage as a JSON string
  localStorage.setItem("foodData", JSON.stringify(newFoodDatas));
}
