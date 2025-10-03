import React from 'react'
// import TodoItem from './TodoItem'
import TodoItems from './TodoItems'
const Todo = () => {
  const todoItems = [
    {
        name: "Item 1",
        date: "4/7/25"
    },
    {
        name: "Item 2",
        date: "5/7/25"
    },
    {
        name: "Item 3",
        date: "6/7/25"
    },
  ]
  return (
    <div>
      <h2 className="text-xl font-bold">Todo Item</h2>
      <p className="text-gray-400">This is a todo item description.</p>
      <div className='gap-4 mt-4 flex  justify-center flex-col-2'>
        <input type="text" className="border px-4 border-gray-600 bg-gray-700 text-white" />
        <input type="date" className="border px-4 border-gray-600 bg-gray-700 text-white" />
      <button className="mt-2  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add Todo
      </button>
      </div>
      
     {/* <TodoItem todoDate={'4/5/25'} todoName={'React'}/> */}
     <TodoItems todoItems={todoItems}></TodoItems>
      
    </div>
  )
}

export default Todo
