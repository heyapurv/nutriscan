import React from 'react'
import Item from './Item';
import FoodInput from './FoodInput';

const FoodItems = ({items}) => {
  
  return (
    <div>
      <div className='flex flex-col items-center justify-center bg-gray-700 p-5 rounded-lg shadow-lg'>
      <h1 className=''>Food Component</h1>
       
   <div className='my-5'>
      <FoodInput/>
   </div>
        <ul className=''>
              {items.map(item => (
              <Item key={item} FoodItem={item} />
              ))}
        </ul>

    </div>
    </div>
  )
}

export default FoodItems
