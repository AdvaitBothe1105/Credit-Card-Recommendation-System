import "./Cards.css";
import card_img from "../../assets/card.png";
import { Button } from "../ui/button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import React from "react";

export const Cards = () => {
  const cardsData = [
    { id: 1, name: "Amex Credit Card", image: "../../assets/card.png" },
    { id: 2, name: "Visa Platinum Card", image: "../../assets/card.png" },
    { id: 3, name: "Mastercard Gold", image: "../../assets/card.png" },
    { id: 4, name: "Business Credit Card", image: "../../assets/card.png" },
    { id: 5, name: "Rewards Credit Card", image: "../../assets/card.png" },
    { id: 6, name: "Travel Credit Card", image: "../../assets/card.png" },
    { id: 7, name: "Cashback Credit Card", image: "../../assets/card.png" },
    { id: 8, name: "Student Credit Card", image: "../../assets/card.png" },
    { id: 9, name: "Corporate Credit Card", image: "../../assets/card.png" },
    { id: 10, name: "Luxury Credit Card", image: "../../assets/card.png" },
    { id: 11, name: "Exclusive Credit Card", image: "../../assets/card.png" },
    { id: 12, name: "Basic Credit Card", image: "../../assets/card.png" },
    { id: 13, name: "Elite Credit Card", image: "../../assets/card.png" },
    { id: 14, name: "Digital Credit Card", image: "../../assets/card.png" },
    { id: 15, name: "Limited Edition Card", image: "../../assets/card.png" },
  ];

  
  // const { product_id, name, price } = product
  // console.log(product_id, product_id.length)

  // console.log(imageSrc, imageSrc.length)
  return (
    <div className="cards-sec bg-[#edeae7]">
      <h2 className="text-3xl text-center pt-5 mt-3 font-bold">
        We have 15 cards which offer you the best services.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
        {cardsData.map((card) => (
          <div key={card.id} className="item bg-white p-5 shadow-lg rounded-xl">
            <a href="/">
              <div className="item-image">
                <img
                  src={card_img}
                  alt={card.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="item-content text-center mt-4">
                <h2 className="text-xl font-semibold">{card.name}</h2>
                <div className="flex justify-center gap-3 mt-3">
                  <Button className="bg-black text-white flex items-center gap-2">
                    <FaRegArrowAltCircleRight /> Learn More
                  </Button>
                  <Button className="bg-[#F5E960] text-black flex items-center gap-2">
                    <IoMdPaper /> Apply Now
                  </Button>
                  
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
