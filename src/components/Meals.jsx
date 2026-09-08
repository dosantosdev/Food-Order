import MealItem from "./MealItem.jsx";
import useHtpp from "../hooks/useHttp.js";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHtpp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
