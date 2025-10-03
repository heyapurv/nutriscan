import React from 'react'

const Food = () => {
    let foodItems = ['Pizza', 'Burger', 'Pasta'];
  return (
    <div className='flex flex-col h-screen items-center justify-center bg-gray-700 p-5 rounded-lg shadow-lg'>
      <h1 className=''>Food Component</h1>
      <div>
        <ul className=''>
            {foodItems.map(item => (
            <li key={item}>{item}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Food
