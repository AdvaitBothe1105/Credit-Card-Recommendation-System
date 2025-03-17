import "./Cards.css";
import { Button } from "../ui/button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import React from "react";

export const Cards = () => {
  const cardsData = [
    { id: 0, name: "Amex Credit Card", image: "/assets/AmexP.jpeg" },
    { id: 1, name: "Magnus Credit Card", image: "/assets/MagnusP.jpeg" },
    { id: 2, name: "Zenith+ Credit Card", image: "/assets/ZenithP.jpeg" },
    { id: 3, name: "Freedom Credit Card", image: "/assets/FreedomA.jpeg" },
    { id: 4, name: "BIZ Grow Credit Card", image: "/assets/BIZGrowA.jpeg" },
    {
      id: 5,
      name: "All Purpose Credit Card",
      image: "/assets/All_Purpose.jpeg",
    },
    {
      id: 6,
      name: "Diners Club Metal Edition Credit Card",
      image: "/assets/DinersP.jpeg",
    },
    {
      id: 7,
      name: "INFINIA Metal Edition Credit Card",
      image: "/assets/INFINIAP.jpeg",
    },
    { id: 8, name: "Jet Privilege Credit Card", image: "/assets/JetT.png" },
    { id: 9, name: "IRCTC Credit Card", image: "/assets/IRCTCT.png" },
    { id: 10, name: "Money Back+ Credit Card", image: "/assets/MoneyL.jpeg" },
    { id: 11, name: "Millenia Credit Card", image: "/assets/MilenniaL.jpeg" },
    { id: 12, name: "Regalia Credit Card", image: "/assets/RegaliaL.jpeg" },
    { id: 13, name: "HP Credit Card", image: "/assets/HPF.jpeg" },
    { id: 14, name: "Indian Oil Card", image: "/assets/IndianF.jpeg" },
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
                  src={card.image}
                  alt={card.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="item-content text-center mt-4">
                <h2 className="text-xl font-semibold">{card.name}</h2>
                <div className="flex justify-center gap-3 mt-3">
                  <Button className="bg-black text-white flex items-center gap-2 hover:bg-white">
                    <FaRegArrowAltCircleRight /> Learn More
                  </Button>
                  <Button className="bg-[#F5E960] text-black flex items-center gap-2 hover:bg-[#c7bd56]">
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
