const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
        {/* Copyright Section */}
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>

        {/* Navigation/Links Section */}
        <div className="flex justify-center md:justify-start space-x-6 mb-4 md:mb-0">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Sitemap</a>
        </div>

        {/* Social Media Links Section */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Facebook</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Twitter</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;