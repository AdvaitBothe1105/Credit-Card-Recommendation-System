// import './App.css'
import { Carousel } from "./components/Carousel/Carousel";
import { Cards } from "./components/Categories/Cards";
import { Navbar } from "./components/Navbar/Navbar";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router"

import { HomePage } from "./Pages/HomePage";
import { IncomePage } from "./Pages/IncomePage";
import { CardRecommendation } from "./Pages/CardRecommendation";
import { CardInfo } from "./Pages/CardInfo";
import { Footer } from "./components/Footer/Footer";
import { QuestionPage } from "./Pages/QuestionPage";
// import { SliderSizes } from './components/Slider/Slider'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <RoutesList />
        <Footer/>
      </Router>

    </>
  );
}

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/incomepage" element={<IncomePage />} />
      <Route path="/cardrec" element={<CardRecommendation/>}/>
      <Route path="/cardinfo" element = {<CardInfo />} />
      <Route path="/quespage" element = {<QuestionPage />} />
    </Routes>
  );
};

export default App;
