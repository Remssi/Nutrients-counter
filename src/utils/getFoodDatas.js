export default function getFoodDatas() {
  const foodRecords = JSON.parse(localStorage.getItem("foodRecords")) || [];
  const foodItems = JSON.parse(localStorage.getItem("foodItems")) || [];

  return [foodRecords, foodItems];
}
