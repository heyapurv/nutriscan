import { useState } from 'react';

const Sidebar = ({selectedTab, setSelectedTab}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = (tabName) =>{
    setSelectedTab(tabName)
  }
  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 text-gray-700 bg-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex-shrink-0`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-2xl font-bold">Dashboard</span>
        </div>
        
        <nav className="flex-1 px-2 py-4 space-y-2" >
          <a href="#" id='Home' className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            onClick={()=>{handleOnClick("Home")}}>
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0v-9" />
            </svg>
            Home
          </a>
          <a href="#" id='POSTS' className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
          onClick={()=>{handleOnClick("POST")}}>
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H9a1 1 0 01-1-1v-4a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1z" />
            </svg>
            POST
          </a>
          
        </nav>
      </div>
    </>
  );
};

export default Sidebar;