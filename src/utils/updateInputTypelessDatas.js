import InputType from "../types/InputType.js";
import getAllFoodDatas from "./getAllFoodDatas.js";
import setAllFoodDatas from "./setAllFoodDatas.js";

export default function updateInputTypelessDatas() {
  const foodDatasWithoutInputType = getAllFoodDatas().filter(
    (food) => !food.inputType
  );

  if (foodDatasWithoutInputType.length === 0) return;

  const foodDatasWithInputType = foodDatasWithoutInputType.map((food) => ({
    ...food,
    inputType: InputType.perServing,
  }));

  setAllFoodDatas(foodDatasWithInputType);
}
