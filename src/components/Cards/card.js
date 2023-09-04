import React from 'react'
import {FaHeart, FaRegHeart} from "react-icons/fa";

const Card = ({meal, selectMeal}) => {
  return (
    <div>
        <div className="w-80 rounded-md">
          <img  onClick={() => {selectMeal(meal.idMeal)}} src={meal.strMealThumb} alt={meal.strMeal} className='hover:cursor-pointer object-cover rounded-t-md' />
          <div className='text-xl bg-white rounded-b-md px-5 py-3 shadow-lg flex justify-between items-center'>
            <h3 className=''>{meal.strMeal}</h3> 
            <FaRegHeart className='font-bold cursor-pointer hover:text-[#842029] hover:-translate-y-1 transition-all ease-in-out duration-300' />
          </div>
        </div>
    </div>
  )
}

export default Card;