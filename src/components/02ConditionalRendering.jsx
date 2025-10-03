import React from 'react'

const ConditionalRendering = () => {


let foodItems = ['Pizza', 'Burger', 'Pasta'];
  return (
    <div className='flex flex-col items-center justify-center bg-gray-700 p-5 rounded-lg shadow-lg'>
      <h1 className=''>Food Component</h1>
      {foodItems.length === 0 ? <p>No food items available</p> : (
        <div>
          <ul className=''>
              {foodItems.map(item => (
              <li key={item}>{item}</li>
              ))}
        </ul>
      </div>)}
    </div>
  )
}

export default ConditionalRendering
