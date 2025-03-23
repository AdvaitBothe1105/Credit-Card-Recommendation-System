import { useState } from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { Button } from "../ui/button";
import { IoMdPaper } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { cardsData } from "../../data/cardsData"; // Importing card data

export const CardDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardId } = location.state || {};

  // Find the card details using the cardId
  const selectedCard = cardsData.find((card) => card.id === cardId);

  if (!selectedCard) {
    return <p>Card not found</p>; // Handle case where card is not found
  }

  // const selectedCard = cardsData.find((card) => card.id === cardId);

  const [activeTab, setActiveTab] = useState("features");
  const firstFourFeatures = selectedCard.features.slice(0, 4);
  const formatFeeKey = (key) => {
    return key
      .replace(/([A-Z])/g, " $1") // Add spaces before uppercase letters
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
      .trim();
  };
  return (
    <div className="details">
      <div className="relative w-full h-[70vh] flex justify-center items-center">
        {/* Background Blur */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center blur-lg opacity-80"
          style={{ backgroundImage: `url(${selectedCard.banner})` }}
        ></div>

        {/* Main Image */}
        <div className="relative z-10 flex flex-col items-center">
          <img
            className="w-80 h-auto rounded-xl shadow-lg transition-transform duration-500 transform hover:scale-105"
            src={selectedCard.image}
            alt={selectedCard.name}
          />
          <h2 className="mt-5 text-white text-5xl font-bold text-center drop-shadow-lg">
            {selectedCard.name} - A World of Exclusive Privileges
          </h2>
        </div>
      </div>
      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-indigo-600">
              Exclusive Features
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Experience premium benefits with {selectedCard.name}
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Enjoy the top features that make this credit card a must-have.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {firstFourFeatures.map((feature, index) => (
                <div key={index} className="relative pl-8">
                  <dt className="text-lg font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                      {index + 1}
                    </div>
                    {feature}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="feat bg-[#edeae7] py-10">
        <div className="max-w-6xl mx-auto mt-10 bg-[#C49991] rounded-lg text-white">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`flex-1 py-3 text-center text-xl font-semibold border-b-4 transition ${
                activeTab === "features"
                  ? "border-black text-white"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("features")}
            >
              <span className="flex items-center justify-center space-x-2">
                <FaRegNewspaper size={25} className="mr-3" />
                <span>Features</span>
              </span>
            </button>
            <button
              className={`flex-1 py-3 text-center font-semibold border-b-4 transition ${
                activeTab === "fees"
                  ? "border-black text-white"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("fees")}
            >
              <span className="flex items-center justify-center space-x-2">
                <RiMoneyRupeeCircleLine size={25} className="mr-3" />
                <span>Fees and Charges</span>
              </span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 bg-white shadow-md rounded-b-lg">
            {activeTab === "features" ? (
              <div>
                <h3 className="text-xl font-semibold mb-4">More Features</h3>
                <ul className="space-y-4 text-gray-700">
                  {selectedCard.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold mb-4">Fees and Charges</h3>
                <ul className="space-y-4 text-gray-700">
                  {Object.entries(selectedCard.fees).map(([key, value]) => (
                    <li key={key}>
                      <strong>{formatFeeKey(key)}: </strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="apply-btn flex justify-center mt-5">
          <Button className="bg-black text-white flex items-center gap-2 hover:bg-[#c7bd56] " onClick={() => navigate("/applynow")}>
            <IoMdPaper /> Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
 
};
