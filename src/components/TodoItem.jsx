import React from 'react'

const TodoItem = ({todoName, todoDate}) => {
  return (
    <div>
       <div>
        <ul className="mt-4">
          <li className="flex justify-between items-center bg-gray-700 p-2 rounded mb-2">
            <span>{todoName}</span>
            {/* date */}
            <span className="text-gray-400">{todoDate}</span>
            {/* actions */}
            <button className="text-red-500 hover:text-red-700">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TodoItem
