import { useRef, useState } from 'react'

const NewItem = () => {
    const nameRef = useRef()
    const descRef = useRef()
    const [input, setInput] = useState([])
    const handleSubmit = (e) =>{
        e.preventDefault()
        const name = nameRef.current.value.trim()
        const desc = descRef.current.value.trim()
        const newItem ={
            name, desc
        }
        setInput( [...input, newItem])
        nameRef.current.value = ''
        descRef.current.value = ''
    }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-800 text-white'>
        hello
        <form  onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2 text-gray-500'>
                <input type="text" placeholder="Enter new item" ref={nameRef} />
                <input type="text" placeholder="Enter item description" ref={descRef} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    {/* i want to print it now */}
     <div>
          {input.map((todo, index) => (
              <li key={index} className='bg-gray-800 p-4 rounded shadow'>
                <h3 className='text-lg font-semibold'>{todo.name}</h3>
                <p className='text-sm text-gray-400'>{todo.desc}</p>
              </li>
            ))}
     </div>
    </div>
  )
}

export default NewItem


