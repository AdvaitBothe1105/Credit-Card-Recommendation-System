import { useState } from "react";
import { SliderSizes } from "../Slider/Slider";
import {
  MdOutlineDining,
  MdFlight,
  MdOutlineLocalMovies,
  MdCardTravel,
} from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { BsFuelPump } from "react-icons/bs";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import Slider from "@mui/material/Slider";
import { Stack } from "@mui/material";
import { Questions } from "../Questions/Questions";
import { Toaster, toast } from "sonner";
import { LuShoppingBag } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const categoryIcons = {
  Dining: <MdOutlineDining size={24} className="text-gray-700" />,
  Travel: <MdFlight size={24} className="text-gray-700" />,
  Shopping: <FiShoppingCart size={24} className="text-gray-700" />,
  Fuel: <BsFuelPump size={24} className="text-gray-700" />,
  Movies: <MdOutlineLocalMovies size={24} className="text-gray-700" />,
  International: <MdCardTravel size={24} className="text-gray-700" />,
  Grocery: <LuShoppingBag size={24} className="text-gray-700" />,
  Misc: <AiOutlineHome size={24} className="text-gray-700" />,
};

const categories = [
  "Dining",
  "Travel",
  "Shopping",
  "Fuel",
  "Movies",
  "International",
  "Grocery",
  "Misc",
];

export const Income = () => {
  const navigate = useNavigate();
  const [income, setIncome] = useState(5000);
  const [spending, setSpending] = useState(() =>
    categories.reduce((acc, category) => ({ ...acc, [category]: 0 }), {})
  );

  // Compute category-wise totals
  const premiumSpending =
    spending.Dining + spending.Travel + spending.International;
  const allPurposeSpending = spending.Grocery + spending.Misc;
  const lifestyleSpending =
    spending.Movies + spending.Shopping + spending.Dining;
  const fuelSpending = spending.Fuel;
  const travelSpending = spending.Travel;

  // Compute total monthly expenses
  const totalExpenses = Object.values(spending).reduce(
    (acc, val) => acc + val,
    0
  );

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-3 pb-5">
      <Toaster theme="dark" />
      <h1 className="text-3xl font-bold">FinMatch</h1>
      <p className="text-lg text-gray-600 mb-6">
        The smarter way to choose credit cards
      </p>

      <div className="bg-white flex flex-col p-6 rounded-lg shadow-lg w-[90%]">
        <div className="flex items-start w-full">
          {/* Income Slider Section */}
          <div className="income flex flex-col items-center bg-[#edeae7] rounded-lg p-4 w-[20%]">
            <label className="block text-xl font-medium mb-6 text-center">
              Select Your Income
            </label>
            <label className="block text-lg font-medium mb-2 pb-3 text-center">
              Above ₹ 6 Lakhs
            </label>

            <Stack sx={{ height: 250 }} spacing={1} direction="row">
              <Slider
                aria-label="Income"
                orientation="vertical"
                valueLabelDisplay="auto"
                step={5000}
                min={5000}
                max={600000}
                value={income}
                onChange={(e, newValue) => setIncome(newValue)}
                valueLabelFormat={(value) => `₹ ${value.toLocaleString()}`}
                sx={{
                  width: 10,
                  color: "#3a8589",
                  "& .MuiSlider-thumb": { borderRadius: "1px" },
                }}
              />
            </Stack>

            <p className="text-lg font-semibold mt-4">
              ₹ {income.toLocaleString()}
            </p>

            <div className="flex items-center space-x-2 mt-2 bg-white p-2 rounded-lg shadow-md">
              <RiMoneyRupeeCircleLine size={40} className="text-gray-700" />
              <label className="block text-lg font-medium">
                Monthly Income
              </label>
            </div>
          </div>

          {/* Expenses Section */}
          <div className="expenses bg-[#edeae7] rounded-lg p-6 w-[90%] ml-5">
            <h2 className="text-xl font-semibold text-center mb-1">
              Select Your Monthly Expenditure
            </h2>

            <div className="expense-sliders flex justify-between">
              {categories.map((category) => (
                <div
                  key={category}
                  className="my-3 flex flex-col items-center w-[15%]"
                >
                  <label className="block text-lg font-medium mb-2">
                    ₹ 50,000
                  </label>

                  <Stack
                    sx={{ height: 250 }}
                    spacing={1}
                    direction="column"
                    alignItems="center"
                  >
                    <Slider
                      aria-label={category}
                      orientation="vertical"
                      valueLabelDisplay="auto"
                      step={1000}
                      min={1000}
                      max={50000}
                      value={spending[category] || 0}
                      onChange={(e, newValue) =>
                        setSpending((prev) => ({
                          ...prev,
                          [category]: newValue,
                        }))
                      }
                      valueLabelFormat={(value) =>
                        `₹ ${value.toLocaleString()}`
                      }
                      sx={{
                        width: 10,
                        color: "#3a8589",
                        "& .MuiSlider-thumb": { borderRadius: "1px" },
                      }}
                    />
                  </Stack>

                  <p className="block text-lg font-medium mb-2 mt-4">
                    ₹ {spending[category]?.toLocaleString() || "0"}
                  </p>

                  <div className="flex items-center space-x-2 mt-2 bg-white p-2 rounded-lg shadow-md">
                    {categoryIcons[category]}
                    <label className="block text-lg font-medium">
                      {category}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Total Monthly Expenses Below */}
        <div className="total bg-[#edeae7] p-4 rounded-lg shadow-md w-full text-center mt-6">
          <h3 className="text-xl font-semibold mb-2">Total Monthly Expenses</h3>
          <p
            className={`text-lg font-bold ${
              totalExpenses > income ? "text-red-600" : "text-green-600"
            }`}
          >
            ₹ {totalExpenses.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="btns flex gap-5">
        <button
          className="mt-4 bg-[#C49991] text-white py-2 px-4 rounded"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <button
          className="mt-4 bg-black text-white py-2 px-4 rounded"
          onClick={() => {
            const hasValidSpending = Object.values(spending).some(
              (val) => val > 0
            );

            if (!hasValidSpending) {
              toast.error(
                "Please enter values for at least one spending category."
              );
              return;
            }

            if (totalExpenses > income) {
              toast.error(
                "Your total monthly expenses exceed your income! Please adjust them."
              );
              return; // Stop further execution
            }

            // Navigate only if conditions are met
            navigate("/quespage", {
              state: {
                premium: premiumSpending,
                allPurpose: allPurposeSpending,
                lifestyle: lifestyleSpending,
                fuel: fuelSpending,
                travel: travelSpending,
                income: income,
              },
            });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
