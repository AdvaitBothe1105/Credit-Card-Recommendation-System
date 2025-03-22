import "./Cards.css";
import { Button } from "../ui/button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import React from "react";
import { useNavigate } from "react-router-dom";
import { cardsData } from "../../data/cardsData"; // Importing card data

export const Cards = () => {
  const navigate = useNavigate();

  // const { product_id, name, price } = product
  // console.log(product_id, product_id.length)

  // console.log(imageSrc, imageSrc.length)
  return (
    <div className="cards-sec bg-[#edeae7] flex flex-col items-center py-10">
      <h2 className="text-4xl text-center font-bold mb-8">
        Choose from 15 exclusive credit cards.
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12 px-6 w-full max-w-7xl">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="bg-white p-5 shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {/* Card Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Card Content */}
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {card.name}
              </h2>

              {/* Buttons */}
              <div className="flex justify-center gap-3 mt-5">
                <Button
                  className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800"
                  onClick={() => {
                    navigate("/cardinfo", { state: { cardId: card.id } });
                    window.scrollTo(0, 0);
                  }}
                >
                  Learn More <FaRegArrowAltCircleRight />
                </Button>
                <Button className="bg-[#F5E960] text-black flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#c7bd56]">
                  <IoMdPaper /> Apply Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
