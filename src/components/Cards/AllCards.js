import React from 'react';
import { useState, useEffect } from 'react';
import Card from "./card";
  
const AllCards = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
      const mealsCategory = async () => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        // console.log("After fetch request");
        // console.log(response);
        const data = await response.json();
        console.log(data);
        setMeals(data.meals);
      } 
  
      mealsCategory();
    }, []);
    
    const renderCards = () => {
      return meals.map((meal) => <Card key={meal.idMeal} meal={meal}/>)
    }
  
    return (
      <>
        <ul className='mt-20 mx-24 flex flex-wrap gap-6 justify-center items-center'>{renderCards()}</ul>
      </>
    )
};

export default AllCards;