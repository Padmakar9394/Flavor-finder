import React, { useState } from 'react'
import {BsHeart} from "react-icons/bs";

const Card = ({meal}) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div>
        <div onClick={() => setShowDesc(true)} className="w-80 rounded-md">
          <img src={meal.strMealThumb} alt={meal.strMeal} className='object-cover rounded-t-md' />
          <div className='text-xl bg-white rounded-b-md px-5 py-3 shadow-lg flex justify-between items-center'>
            <h3 className=''>{meal.strMeal}</h3> 
            <BsHeart />
          </div>
        </div>

        {showDesc && 
          <div className='fixed grid items-center justify-center z-100  top-0 left-0 bg-[#000000d9] w-screen h-screen'>
            <div className='w-[80vw] h-[80vh] overflow-scroll bg-white rounded-md'>
              <img src={meal.strMealThumb} alt={meal.strMeal} className='w-full h-64 object-cover rounded-t-md' />
              <div className='flex flex-col items-start px-6'>
                <h3 className='text-3xl my-4'>{meal.strMeal}</h3>
                <h4 className='text-xl my-2'>Cooking Instructions</h4>
                <p>{meal.strInstructions}</p>
                <a href={meal.strSource} className='underline my-2'>Original Source
                </a>
                <button className='bg-[#842029] text-white px-3 py-1 rounded my-2' onClick={() => setShowDesc(false)}>Close</button>
              </div>
            </div>
          </div>
        }
    </div>
  )
}

export default Card;