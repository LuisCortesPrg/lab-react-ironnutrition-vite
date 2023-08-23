// Your code here
import React from "react";

const FoodBox = ({ food }) => {
  const { id,name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  const handleDeleteButton=()=>{
    onClick(id)
  }
  return (
    <div> 
      <p>{name}</p>
      <img src={image}  width={120}/>
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button onClick={() => {handleDeleteButton(eachfood.id)}}>Delete</button>
    </div>
  )
}

export default FoodBox;