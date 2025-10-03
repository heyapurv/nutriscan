import React, { useState } from 'react'

const FoodInput = () => {
  const [text, setText] = useState("")
  const textInput = (e) => {
       setText(e.target.value)
  }
  return (
    <div>
    <div>
        <input type="text" className='bg-slate-600' onChange={textInput}/>
    </div>
    <p className='text-center my-5'>{text}</p>
    </div>
  )
}

export default FoodInput
