import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-600 shadow-md text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold ">
          My App
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">Home</a>
          <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">About</a>
          <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">Services</a>
          <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-4 6h4" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col p-4 space-y-2">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">Home</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">About</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">Services</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;