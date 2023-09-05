import React from 'react'

import { useGlobalContext } from '../../context';

const Favorits = () => {
    const { selectMeal, favorites, removeFromFavorites } = useGlobalContext();
  return (
    <div className='bg-[#000] text-[#fff]'>
      <div className='mx-24'> 
        <h3 className='text-xl font-medium'>Favorites</h3>
          <div className='flex flex-wrap'>
            { favorites.map(m => {
              return <div className='flex flex-col items-center justify-center mx-2 my-4 '>
                <div className='w-16 h-16'>
                  <img src={m.strMealThumb} alt={m.strTitle} className='w-full h-full rounded-full border-4 hover:cursor-pointer' onClick={()=>selectMeal(m.idMeal, true)} />
                </div>
                <button className="text-xs py-4 hover:text-[#b4d3fe]" onClick={()=>removeFromFavorites (m.idMeal)}>
                remove
              </button>
              </div>
            })}
          </div>
      </div>
    </div>
  )
}

export default Favorits;