import React from 'react'

const NewForm = () => {
    
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
        
    const handleSubmit = (e) =>{
        // Handle form submission logic here
        e.preventDefault()
        console.log("Form submitted");
        console.log("Name:", name);
        console.log("Email:", email);
        // Reset form fields    
        setName('');
        setEmail('');
    }
   return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-800 text-white'>
      <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 mt-4'>
       <div className='gap-4 text-gray-600 flex flex-col justify-center items-center'>
         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
       </div>
        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded'>Submit </button>
      </form>
      {/* show the collected data after submit button is clicked */}
      {name && email && (
        <div className='mt-4'>
          <h2 className='text-lg font-semibold'>Collected Data:</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      )}

    </div>
  )
}

export default NewForm
