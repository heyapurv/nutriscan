import React from 'react'

const Item = (props) => {
    let {FoodItem} = props;
  return (
    <div className='flex flex-row items-center text-center justify-between  bg-gray-700 gap-3'>
       <li >{props.FoodItem} </li>
       <button
       onClick={(event) => console.log(`${FoodItem} being bought`, event)}
       className='bg-gray-500 p-2 rounded-md m-4'>buy</button>
    </div>
  )
}

export default Item
