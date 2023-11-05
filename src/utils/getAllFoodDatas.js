export default function getAllFoodDatas() {
  // Get food data from localStorage
  const foodDatas = JSON.parse(localStorage.getItem("foodData")) || [];

  return foodDatas;
}
