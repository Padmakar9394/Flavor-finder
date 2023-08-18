import React from 'react'
import {BsHeart} from "react-icons/bs";

const Card = ({meal}) => {
  return (
    <div className='w-80 rounded-md'>
        <img src={meal.strMealThumb} alt={meal.strMeal} className='object-cover rounded-t-md' />
        <div className='text-xl bg-white rounded-b-md px-5 py-3 drop-shadow-md flex justify-between items-center'>
          <h3 className=''>{meal.strMeal}</h3> 
          <BsHeart />
        </div>
    </div>
  )
}

export default Card;