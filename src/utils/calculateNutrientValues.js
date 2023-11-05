// Calculate values based on inputType and grams
const calculateNutrientValues = (food) => {
  const grams = food.grams || 100; // If grams is undefined, assume 100g

  if (food.inputType === "per100Grams") {
    const factor = grams / 100;
    return {
      calorie: Math.round(food.calorie * factor),
      protein: Math.round(food.protein * factor),
      carb: Math.round(food.carb * factor),
      fat: Math.round(food.fat * factor),
    };
  }

  return {
    calorie: food.calorie,
    protein: food.protein,
    carb: food.carb,
    fat: food.fat,
  };
};

export default calculateNutrientValues;
