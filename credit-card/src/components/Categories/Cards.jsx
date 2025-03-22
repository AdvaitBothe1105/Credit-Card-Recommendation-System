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
    <div className="cards-sec bg-[#edeae7] flex flex-col items-center mt-5">
      <h2 className="text-3xl text-center pt-5 mt-3 font-bold">
        We have 15 cards which offer you the best services.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 p-5 justify-center">
        {cardsData.map((card) => (
          <div key={card.id} className="item bg-white p-5 shadow-lg rounded-xl">
            <div className="item-image">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <div className="item-content text-center mt-4">
              <h2 className="text-xl font-semibold">{card.name}</h2>
              <div className="flex justify-center gap-3 mt-3">
                <Button
                  className="bg-black text-white flex items-center gap-2 hover:bg-white"
                  onClick={() => {
                    navigate("/cardinfo", { state: { cardId: card.id } });
                    window.scrollTo(0, 0);
                  }}
                >
                  Learn More
                  <FaRegArrowAltCircleRight />
                </Button>
                <Button className="bg-[#F5E960] text-black flex items-center gap-2 hover:bg-[#c7bd56]">
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
