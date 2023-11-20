import InputType from "../types/InputType.js";
import getFoodDatas from "./getFoodDatas.js";
import getNutrientText from "./getNutrientText.js";

export default function generateFoodDataList() {
  const [foodRecords, foodItems] = getFoodDatas();

  const foodDataListElement = document.querySelector(".food-data-list");
  const foodDataCountElement = document.querySelector(".food-data-count");

  // TODO: filters

  // Set count text
  foodDataCountElement.innerHTML = `Ruokia yhteensä: ${foodItems.length}`;

  // Clear existing content
  foodDataListElement.innerHTML = "";

  // Iterate through each foodData
  foodItems.forEach((foodItem) => {
    // Create a container for the foodItem
    const container = document.createElement("div");
    container.classList.add("food-item");

    // Add details of the foodItem to the container
    const foodItemDetails = document.createElement("div");

    foodItemDetails.classList.add("food-item-data");
    const foodNameElement = document.createElement("p");
    foodNameElement.classList.add(
      "food-item-data-row",
      "food-item-data-name",
      foodItem.inputType === InputType.per100Grams
        ? "food-name-color-per-100-grams"
        : "food-name-color-per-serving"
    );
    foodNameElement.textContent =
      foodItem.foodName.length > 0 ? foodItem.foodName : "Nimetön";
    foodItemDetails.appendChild(foodNameElement);

    // Add other properties if they exist
    ["calorie", "protein", "carb", "fat", "grams"].forEach((property) => {
      if (foodItem[property].length > 0) {
        const propertyElement = document.createElement("p");
        propertyElement.classList.add(
          "food-item-data-row",
          `auto-complete-${property}`
        );
        propertyElement.textContent = `${getNutrientText(property)}:${
          foodItem[property]
        }`;
        foodItemDetails.appendChild(propertyElement);
      }
    });

    container.appendChild(foodItemDetails);

    // Add count of related foodRecords
    const foodRecordsCount = document.createElement("p");
    foodRecordsCount.classList.add("food-item-related-records");
    foodRecordsCount.textContent = `kirjauksia: ${
      foodRecords.filter((foodRecord) => foodRecord.foodId === foodItem.foodId)
        .length
    }`;
    container.appendChild(foodRecordsCount);

    // TODO: sorts

    // Append the container to the food data list element
    foodDataListElement.appendChild(container);
  });
}
