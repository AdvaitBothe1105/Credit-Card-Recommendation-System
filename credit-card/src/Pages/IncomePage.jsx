import { Income } from "@/components/Income/Income";
import { SliderSizes } from "@/components/Slider/Slider";
import React, { useState } from "react";



export const IncomePage = () => {
  // Handle recommendation request
  //   const fetchRecommendations = async () => {
  //     try {
  //       const response = await axios.post("http://127.0.0.1:5000/predict", {
  //         Income: income,
  //         Travel: spending.Travel || 0,
  //         Lifestyle: spending.Shopping || 0,
  //         Premium: spending.Movies || 0,
  //         All_Purpose: spending.Dining || 0,
  //         Fuel: spending.Fuel || 0,
  //         High_Income: income > 150000 ? 1 : 0,
  //         Student: 0,
  //         Self_Employed: 1,
  //         Frequent_Traveler: spending.Travel > 10000 ? 1 : 0,
  //         Online_Shopper: spending.Shopping > 10000 ? 1 : 0,
  //         Fuel_Customer: spending.Fuel > 5000 ? 1 : 0,
  //       });
  //       setRecommendations(response.data);
  //     } catch (error) {
  //       console.error("Error fetching recommendations", error);
  //     }
  //   };
  return (
    <>
      <Income/>
    </>
  );
};
