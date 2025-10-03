import React from 'react'

let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second:'2-digit' });

const Clock = () => {
  return (
    <div className='flex text-xl items-center justify-center gap-4'>
        <p className=" font-bold">Current Time :</p>
        <p className="text-gray-400">{time}</p>   
        
    </div>
  )
}

export default Clock
