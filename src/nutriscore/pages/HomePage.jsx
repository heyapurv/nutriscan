import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-md fixed top-0 z-50">
        <h1 className="text-2xl font-bold text-green-600">NutriScore</h1>
        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <a href="#features" className="hover:text-green-600 transition">Features</a>
          <a href="#about" className="hover:text-green-600 transition">About</a>
          <a href="#contact" className="hover:text-green-600 transition">Contact</a>
        </nav>
        <button
          onClick={() => navigate("/input")}
          className="px-5 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 bg-gradient-to-r from-green-100 to-white mt-16">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
            Eat <span className="text-green-600">Smarter</span>, Live <span className="text-green-600">Healthier</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-lg">
            Upload or scan your food product and get a NutriScore out of 10.
            Discover nutrients, allergens, and healthier alternatives instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/input")}
              className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
            >
              Upload Image
            </button>
            <button
              onClick={() => navigate("/input")}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Scan Now
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center ">
          <img
            src="https://img.freepik.com/free-vector/healthy-food-concept-illustration_114360-1647.jpg"
            alt="Healthy food illustration"
            className="w-80 md:w-[28rem] object-contain rounded-s-3xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 md:px-16 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why NutriScore?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-xl mb-3">Instant Analysis</h4>
            <p className="text-gray-600">
              Scan or upload any product to get a comprehensive health score instantly.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-xl mb-3">Healthy Alternatives</h4>
            <p className="text-gray-600">
              Discover better options based on your dietary preferences and allergens.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-xl mb-3">Personalized</h4>
            <p className="text-gray-600">
              Input your age, diet, and allergies to receive recommendations tailored to you.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 md:px-16 py-16 bg-green-600 text-white text-center rounded-t-3xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Smarter Choices?</h3>
        <p className="text-lg md:text-xl mb-8">
          Upload your food product now and get your NutriScore instantly.
        </p>
        <button
          onClick={() => navigate("/input")}
          className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} NutriScore. All rights reserved.
      </footer>
    </div>
  );
}
