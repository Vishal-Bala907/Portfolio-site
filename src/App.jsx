import React from "react";
import MainPage from "./components/MainPage";
import { motion, useScroll } from "framer-motion";
import "./App.css";
import "aos/dist/aos.css";

import AOS from "aos";
import Nav from "./components/navigation bar/Nav";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Clocck from "./components/projects/code/Clocck";
import CafeLite from "./components/projects/code/CafeLite";
import CafeAdv from "./components/projects/code/CafeAdv";
import Temple from "./components/projects/code/Temple";
import ECommerceWebbApp from "./components/projects/code/ECommerceWebbApp";
import DailyProgress from "./components/projects/code/DailyProgress";

function App() {
  const { scrollYProgress } = useScroll();
  AOS.init();
  return (
    <div className="bg-dark">
      <motion.div
        className="progress-bar-motion"
        style={{ scaleX: scrollYProgress }}
      />
      <Nav />

      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        {/* <MainPage /> */}
        <Route path="/clock" element={<Clocck />}></Route>
        <Route path="/daily-prog" element={<DailyProgress />}></Route>
        <Route path="/cafe-lite" element={<CafeLite />}></Route>
        <Route path="/cafe-adv" element={<CafeAdv />}></Route>
        <Route path="/temple" element={<Temple />}></Route>
        <Route path="/ec-res" element={<ECommerceWebbApp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
