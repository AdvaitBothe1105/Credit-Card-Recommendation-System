import { useLocation, useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Button } from "../ui/button";
import { IoMdPaper } from "react-icons/io";
import { cardsData } from "../../data/cardsData"; // Importing card data

export const CardRec = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const recommendations =
    location.state?.recommendations?.top_5_recommendations || [];

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
            );
          })}
        </div>
      </div>
    </div>
  );
};
