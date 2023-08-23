import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);
//el eliminar no funciona
  const handleDeletefood = (id) => {
       let filteredArr = foods.filter((eachfood) => {
      if (eachfood.id === id) {
        return false
      } else {
        return true
      }
    })

    
    setFoods(filteredArr)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food, i) => (
      <FoodBox key={i} food={food} onClick={handleDeletefood}/>
      ))}
      {/*iteraccion 2
       <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        }}
      /> */}
    </div>
  );
}

export default App;
