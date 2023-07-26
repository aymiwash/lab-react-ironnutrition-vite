import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";


function App() {
  const [foods, setFoods] = useState(foodsJson)

  const deleteFoodFunction = (currentFoodId) => {
    const updatedFoods = [...foods].filter(food => food.id !== currentFoodId)
    setFoods(updatedFoods)
  }

  const addNewFood = (data) => {
    setFoods([...foods, data])
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFunction={addNewFood} />
      {foods.map(oneFood => {
        return (
          <FoodBox foodObj={oneFood} deleteFood={() => { deleteFoodFunction(oneFood.id) }} key={oneFood.id} />
        )
      }
      )}
    </div>
  );
}

export default App;
