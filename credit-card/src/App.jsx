// import './App.css'
import { Carousel } from "./components/Carousel/Carousel";
import { Cards } from "./components/Categories/Cards";
import { Navbar } from "./components/Navbar/Navbar";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router"

import { HomePage } from "./Pages/HomePage";
import { Recommendations } from "./Pages/Recommendations";
// import { SliderSizes } from './components/Slider/Slider'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <RoutesList />

      </Router>

    </>
  );
}

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recommendations" element={<Recommendations />} />
    </Routes>
  );
};

export default App;
