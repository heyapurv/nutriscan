import React, { useRef, useState } from 'react';

const Useref = () => {
  const titleRef = useRef();
  const descRef = useRef();
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim();
    const desc = descRef.current.value.trim();

    if (title && desc) {
      const newTodo = {
        title,
        desc
      };

      setTodos(prev => [...prev, newTodo]);

      // Clear inputs
      titleRef.current.value = "";
      descRef.current.value = "";
    }
  };

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-900 text-white p-4'>
      <form onSubmit={handleSubmit} className='bg-gray-800 p-6 rounded shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-4 text-center'>The list</h2>
        
        <input
          ref={titleRef}
          type="text"
          placeholder="Enter task title"
          className='w-full p-2 mb-3 rounded bg-gray-700 text-white outline-none'
        />

        <input
          ref={descRef}
          type="text"
          placeholder="Enter task description"
          className='w-full p-2 mb-4 rounded bg-gray-700 text-white outline-none'
        />

        <button
          type="submit"
          className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full'
        >
          Add Task
        </button>
      </form>

      <div className='mt-6 w-full max-w-md'>
        {todos.length > 0 && (
          <ul className='space-y-3'>
            {todos.map((todo, index) => (
              <li key={index} className='bg-gray-800 p-4 rounded shadow'>
                <h3 className='text-lg font-semibold'>{todo.title}</h3>
                <p className='text-sm text-gray-400'>{todo.desc}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Useref;
