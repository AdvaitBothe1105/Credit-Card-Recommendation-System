import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Questions = ({ premium, allPurpose, lifestyle, fuel, travel, income }) => {
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();

  // State for user responses
  const [student, setStudent] = useState(null);
  const [selfEmployed, setSelfEmployed] = useState(null);
  const [frequentTraveler, setFrequentTraveler] = useState(null);

  // Function to fetch recommendations
  const fetchRecommendations = async () => {
    if (student === null || selfEmployed === null || frequentTraveler === null) {
      alert("Please answer all questions before proceeding.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        Income: income,
        Travel: travel,
        Lifestyle: lifestyle,
        Premium: premium,
        All_Purpose: allPurpose,
        Fuel: fuel,
        High_Income: income > 150000 ? 1 : 0,
        Student: student,
        Self_Employed: selfEmployed,
        Frequent_Traveler: frequentTraveler,
        Online_Shopper: lifestyle > 10000 ? 1 : 0,
        Fuel_Customer: fuel > 5000 ? 1 : 0,
      });

      console.log("Recommendations:", response.data);
      setShowCard(true);
      navigate("/cardrec", { state: { recommendations: response.data } }); // Pass recommendations as state
    } catch (error) {
      console.error("Error fetching recommendations", error);
    }
  };

  return (
    <div className="ques bg-[#edeae7] w-[90%] rounded-lg flex flex-col items-center py-10 shadow-md mt-14">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Just a few more questions before we recommend you the best card!
      </h2>

      {/* Form Section */}
      <div className="form bg-white w-[80%] rounded-lg shadow-lg p-6 mt-6 flex flex-col gap-6">
        {/* Student Question */}
        <div className="flex flex-col items-center border-b pb-4">
          <label className="text-lg font-medium text-gray-700">Are you a Student?</label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="student" className="w-5 h-5" onChange={() => setStudent(1)} />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="student" className="w-5 h-5" onChange={() => setStudent(0)} />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Self-Employed Question */}
        <div className="flex flex-col items-center border-b pb-4">
          <label className="text-lg font-medium text-gray-700">Are you self-employed?</label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="selfEmployed" className="w-5 h-5" onChange={() => setSelfEmployed(1)} />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="selfEmployed" className="w-5 h-5" onChange={() => setSelfEmployed(0)} />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Travel Frequency Question */}
        <div className="flex flex-col items-center">
          <label className="text-lg font-medium text-gray-700">Do you travel frequently?</label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="travel" className="w-5 h-5" onChange={() => setFrequentTraveler(1)} />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="travel" className="w-5 h-5" onChange={() => setFrequentTraveler(0)} />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button className="bg-[#C49991] text-white py-2 px-6 rounded-lg hover:bg-gray-500 transition">
          Back
        </button>
        <button
          className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition"
          onClick={fetchRecommendations}
        >
          Show my Card
        </button>
      </div>
    </div>
  );
};
