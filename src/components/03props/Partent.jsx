import React, { useState } from 'react'
import FoodItems from './FoodItems';
import ErrorMsg from './ErrorMsg';

const Partent = () => {

   let [foodItems, setFoodItems] = useState([''])
  return (
    <div>
      <ErrorMsg items={foodItems}/>
      <FoodItems  items={foodItems}/>
    </div>
  )
}

export default Partent
