export default function setFoodDatas(newFoodRecords, newFoodItems) {
  // Store the updated list in local storage as a JSON string
  if (newFoodRecords)
    localStorage.setItem("foodRecords", JSON.stringify(newFoodRecords));
  if (newFoodItems)
    localStorage.setItem("foodItems", JSON.stringify(newFoodItems));
}
