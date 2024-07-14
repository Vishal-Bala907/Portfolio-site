import React from "react";
import Nav from "./navigation bar/Nav";
import HeroCover from "./HeroCover";
import MySelf from "./MySelf";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

export default function MainPage() {
  return (
    <div className="bg-dark">
      {/* <Nav /> */}
      <HeroCover />
      <MySelf />
      <hr style={{ color: "white", width: "80%", margin: "auto" }} />
      <Skills />
      <hr style={{ color: "white", width: "80%", margin: "auto" }} />
      <Projects />
      <hr style={{ color: "white", width: "80%", margin: "auto" }} />
      <ContactMe />
      <hr style={{ color: "white", width: "100%", margin: "auto" }} />
      {/* <Footer /> */}
    </div>
  );
}
