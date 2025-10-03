import React from 'react';
import {useState} from 'react'
export default function One() {

  let [basket, setBasket] = useState([])
  let [text, setText] = useState()
  const textinputevent=(e)=>{
   setText(e.target.value)
  }
  const addThing = (event) =>{
    setBasket([...basket, text])
    setText("")
  }

const handleDelete = (indexToRemove) => {
  const newBasket = basket.filter((_, index) => index !== indexToRemove);
  setBasket(newBasket);
};

  return (
    <div className='flex flex-col h-screen items-center justify-center'>
          <div className='flex gap-4'>
          <input type="text" className='text-gray-600 bg-slate-300' onChange={textinputevent}/>
          <button className='bg-slate-400 p-2' onClick={addThing}>add</button>
          </div>
          <p className='m-2   '>{text}</p>
      {basket.map((item, index) => (
       <div className='grid grid-cols-2 items-center '>
         <li className='flex justify-between gap-10 text-white' key={index}>{item}  </li>
        <button className='m-2 bg-red-400 p-2' onClick={() => handleDelete(index)}>delete</button>
       </div>
      ))}

    </div>
  );
}
