import { useLocation } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Button } from "../ui/button";
import { IoMdPaper } from "react-icons/io";
import card_img from "../../assets/card.png";

export const CardRec = () => {
  const location = useLocation();
  const recommendations =
    location.state?.recommendations?.top_5_recommendations || [];

  // Static card data
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
  // Extract the card IDs from recommendations
  const recommendedCardIds = recommendations.map((rec) =>
    parseInt(rec.card.split(" ")[1])
  );

  // Filter the cards based on ID
  const recommendedCards = cardsData.filter((card) =>
    recommendedCardIds.includes(card.id)
  );

  return (
    <div className="rec_div flex flex-col items-center">
      <div className="rec bg-[#edeae7] w-[90%] rounded-lg flex flex-col items-center justify-center py-10 shadow-md mt-14">
        <h2 className="text-2xl">
          Here are the Top 5 Cards we recommend based on your Income and
          Expenses
        </h2>
        <div className="cards mt-10 grid grid-cols-3 gap-4 p-5">
          {recommendedCards.map((card) => {
            const creditLimit = recommendations.find(
              (rec) => parseInt(rec.card.split(" ")[1]) === card.id
            )?.credit_limit;

            return (
              <div
                key={card.id}
                className="item bg-white p-5 shadow-lg rounded-xl"
              >
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
                    <p className="text-md text-gray-600">
                      Credit Limit: ₹{creditLimit?.toLocaleString()}
                    </p>
                    <div className="flex justify-center gap-3 mt-3">
                      <Button className="bg-black text-white flex items-center gap-2">
                        <FaRegArrowAltCircleRight /> Learn More
                      </Button>
                      <Button className="bg-[#F5E960] text-black flex items-center gap-2 hover:bg-[#c7bd56]">
                        <IoMdPaper /> Apply Now
                      </Button>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
