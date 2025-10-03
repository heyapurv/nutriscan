import React from 'react'
import TodoItem from './TodoItem'
const TodoItems = ({todoItems}) => {
  return (
    <div>
      <div>
        {todoItems.map( item =>
        ( 
            <TodoItem todoDate={item.date} todoName={item.name}/>
        )
        )}
   
       
      </div>
    </div>
  )
}

export default TodoItems
