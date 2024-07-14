import React from "react";
import MainPage from "./components/MainPage";
import { motion, useScroll } from "framer-motion";
import "./App.css";

import AOS from "aos";
import Nav from "./components/navigation bar/Nav";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Clocck from "./components/projects/code/Clocck";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
