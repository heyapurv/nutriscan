// components/ScorePage.jsx
import { Link } from "react-router-dom";

export default function ScorePage() {
  const product = {
    name: "Chocolate Bar",
    image: "https://dummyimage.com/wuxga",
    score: 7,
  };

  const nutrients = [
    { name: "Calories", value: "250 kcal" },
    { name: "Protein", value: "5 g" },
    { name: "Fat", value: "12 g" },
    { name: "Sugar", value: "15 g" },
    { name: "Fiber", value: "3 g" },
  ];

  const alternatives = [
    {
      name: "Oats Cookies",
      image: "https://dummyimage.com/wuxga",
    },
    {
      name: "Sugar-free Energy Bar",
      image: "https://dummyimage.com/wuxga",
    },
    {
      name: "Dry Fruits Mix",
      image: "https://dummyimage.com/wuxga",
    },
  ];

  // Determine color for score
  const getScoreColor = (score) => {
    if (score >= 8) return "bg-green-500";
    if (score >= 5) return "bg-yellow-400";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Product Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 mb-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 object-cover rounded-2xl shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">NutriScore:</span>
              <div className={`px-4 py-1 rounded-full text-white font-bold ${getScoreColor(product.score)}`}>
                {product.score}/10
              </div>
            </div>
          </div>
        </div>

        {/* Nutrient Breakdown */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Nutrient Breakdown</h3>
          <ul className="divide-y divide-gray-200">
            {nutrients.map((n, i) => (
              <li key={i} className="flex justify-between py-3">
                <span className="text-gray-700">{n.name}</span>
                <span className="font-medium text-gray-900">{n.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Healthy Alternatives */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Healthy Alternatives</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {alternatives.map((alt, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={alt.image}
                  alt={alt.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-gray-800">{alt.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scan Another Button */}
        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition text-lg font-medium"
          >
            Scan Another
          </Link>
        </div>
      </div>
    </div>
  );
}
