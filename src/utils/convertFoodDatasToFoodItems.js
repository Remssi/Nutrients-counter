import generateUniqueId from "./generateUniqueId.js";
import getAllFoodDatas from "./getAllFoodDatas.js";
import getFoodDatas from "./getFoodDatas.js";
import setFoodDatas from "./setFoodDatas.js";

/*
converts food datas that had been stored individually to days
to food items, that have id which is stored to the days
*/
export default function convertFoodDatasToFoodItems() {
  // if conversion is already done before, return
  const [storedFoodRecords] = getFoodDatas();
  if (storedFoodRecords.length > 0) return;

  const foodDatas = getAllFoodDatas();
  console.log(foodDatas);

  // Map the data to create two new objects
  const mappedData = foodDatas.map((data) => {
    // Generate a unique foodId using uuid
    const foodId = generateUniqueId();

    // Create the first object with "time" and "foodId"
    const foodRecords = {
      time: data.time,
      foodId: foodId,
    };

    const { time, ...foodData } = data;

    // Create the second object with all other properties and "foodId"
    const foodItems = {
      ...foodData,
      foodId: foodId,
    };

    return [foodRecords, foodItems];
  });

  // Unpack the result arrays into two separate arrays
  const foodRecords = mappedData.map(([foodRecord]) => foodRecord);
  const foodItems = mappedData.map(([, foodItem]) => foodItem);

  setFoodDatas(foodRecords, foodItems);
}
