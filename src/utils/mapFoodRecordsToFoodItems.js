export default function mapFoodRecordsToFoodItems(foodRecords, foodItems) {
  return foodRecords
    .map((record) => {
      const matchingFoodItem = foodItems.find(
        (item) => item.foodId === record.foodId
      );

      if (matchingFoodItem) {
        return {
          ...record,
          ...matchingFoodItem,
        };
      }

      // Handle the case where no matching foodItem is found
      return null;
    })
    .filter(Boolean); // Filter out null values
}
