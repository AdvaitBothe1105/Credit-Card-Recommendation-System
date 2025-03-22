import { Questions } from "@/components/Questions/Questions";
import { useLocation } from "react-router-dom";

export const QuestionPage = () => {
  const location = useLocation();
  const { premium, allPurpose, lifestyle, fuel, travel, income } = location.state || {};

  return (
    <Questions 
      premium={premium} 
      allPurpose={allPurpose} 
      lifestyle={lifestyle} 
      fuel={fuel} 
      travel={travel} 
      income={income}
    />
  );
};
