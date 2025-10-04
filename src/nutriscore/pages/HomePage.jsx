import { useNavigate } from "react-router-dom";
import { Scan, Award, Users, Leaf, TrendingUp, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm fixed top-0 z-50">
        <h1 className="text-2xl font-bold text-green-600">NutriGrade</h1>
        <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-green-600 transition">Features</a>
          <a href="#about" className="hover:text-green-600 transition">About</a>
          <a href="#contact" className="hover:text-green-600 transition">Contact</a>
        </nav>
        <button
          onClick={() => navigate("/input")}
          className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-medium shadow-sm hover:bg-green-700 transition"
        >
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 mt-16">
        <div className="md:w-1/2 text-center md:text-left space-y-6 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Eat <span className="text-green-600">Smarter</span>, Live <span className="text-green-600">Healthier</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Upload or scan your food product and get a NutriGrade out of 10.
            Discover nutrients, allergens, and healthier alternatives instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button
              onClick={() => navigate("/input")}
              className="px-8 py-3.5 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all"
            >
              Upload Image
            </button>
            <button
              onClick={() => navigate("/input")}
              className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              Scan Now
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src="https://insider.fitt.co/wp-content/uploads/2024/12/PressRelease_2400x1400-2.jpg"
            alt="Healthy food illustration"
            className="w-full max-w-md md:max-w-lg object-contain rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 md:px-20 lg:px-32 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Feature 1: Barcode Scanner */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <Scan className="w-24 h-24 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Barcode Scanner</h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                Simply scan the barcode, and within seconds you'll receive a result that helps you determine the processing level of your food.
              </p>
            </div>

            {/* Feature 2: Health Picks Backed by Experts */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <Award className="w-24 h-24 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Picks Backed by Experts</h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                Discover high-protein, high-fiber & expert-recommended products for a healthier you!
              </p>
            </div>

            {/* Feature 3: Smart Recommendation */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <TrendingUp className="w-24 h-24 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Recommendation</h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                Get personalized suggestions for healthier products with our Smart Recommendation feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Features Section */}
      <section className="px-6 md:px-20 lg:px-32 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Feature 4: Customize Your Preferences */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <Users className="w-24 h-24 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customize Your Preferences</h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                You can also select your preferences, such as vegetarian or non-vegetarian options.
              </p>
            </div>

            {/* Feature 5: AI-Powered */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <ShieldCheck className="w-24 h-24 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered</h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                Leveraging cutting-edge AI technology, our app analyzes your food labels and delivers a detailed assessment of their processing classification.
              </p>
            </div>

            {/* Feature 6: Stay Healthy */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <Leaf className="w-24 h-24 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Healthy</h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                Take steps towards a healthier lifestyle with our app tips and personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 md:px-20 lg:px-32 py-20 bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Make Smarter Choices?</h3>
          <p className="text-lg md:text-xl mb-10 text-green-50">
            Upload your food product now and get your NutriGrade instantly.
          </p>
          <button
            onClick={() => navigate("/input")}
            className="px-10 py-4 bg-white text-green-600 font-bold text-lg rounded-lg shadow-xl hover:bg-gray-50 hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        <p className="text-sm">© {new Date().getFullYear()} NutriGrade. All rights reserved.</p>
      </footer>
    </div>
  );
}