export default function getNutrientText(nutrientKey) {
  switch (nutrientKey) {
    case "calorie":
      return "kcal";
    case "protein":
      return "p";
    case "carb":
      return "hh";
    case "fat":
      return "r";
    case "grams":
      return "g";
  }
}
