// components/InputPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAllergies, FaUtensils, FaUser } from "react-icons/fa";

export default function InputPage() {
  const navigate = useNavigate();
  const [allergy, setAllergy] = useState("");
  const [diet, setDiet] = useState("Veg");
  const [age, setAge] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
          Your Preferences
        </h2>

        <form className="space-y-5">
          {/* Allergy Input */}
          <div className="flex items-center gap-3 border rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-500 transition">
            <FaAllergies className="text-green-500 w-5 h-5" />
            <input
              type="text"
              value={allergy}
              onChange={(e) => setAllergy(e.target.value)}
              placeholder="Allergies (e.g. peanuts, gluten)"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Diet Preference */}
          <div className="flex items-center gap-3 border rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-500 transition">
            <FaUtensils className="text-green-500 w-5 h-5" />
            <select
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="w-full outline-none text-gray-700"
            >
              <option>Veg</option>
              <option>Non-Veg</option>
            </select>
          </div>

          {/* Age Input */}
          <div className="flex items-center gap-3 border rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-500 transition">
            <FaUser className="text-green-500 w-5 h-5" />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Your Age"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={() => navigate("/score")}
            className="w-full bg-green-600 text-white py-3 rounded-xl shadow-lg hover:bg-green-700 transition text-lg font-medium"
          >
            Get Score
          </button>
        </form>
      </div>
    </div>
  );
}
