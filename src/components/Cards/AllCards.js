import React from 'react';
import Card from "./card";

import { useGlobalContext } from '../../context';
  
const AllCards = () => {

  const {meals,selectMeal} = useGlobalContext();
    
    const renderCards = () => {
      return (
        <>
          {meals.map((m) => <Card key={m.idMeal} meal={m} selectMeal={selectMeal}/>)}
        </>
        
        )
    }
  
    return (
      <>
        <ul className='mt-20 mx-24 flex flex-wrap gap-6 justify-center items-center'>{renderCards()}</ul>
      </>
    )
};

export default AllCards;