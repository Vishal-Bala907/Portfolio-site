// import bts from "../../portfolioIcons/bts.png";
// import c from "../../portfolioIcons/c.png";
// import cpp from "../../portfolioIcons/cpp.png";
// import css from "../../portfolioIcons/css.png";
// import eclipse from "../../portfolioIcons/eclipse.png";
// import ex from "../../portfolioIcons/ex.png";
// import hibernate2 from "../../portfolioIcons/hibernate2.png";
// import html from "../../portfolioIcons/html.png";
// import intellij from "../../portfolioIcons/intellij.png";
// import java from "../../portfolioIcons/java.png";
// import js from "../../portfolioIcons/js.png";
// import mate from "../../portfolioIcons/mate.png";
// import mdb from "../../portfolioIcons/mdb.png";
// import msql from "../../portfolioIcons/msql.png";
// import node from "../../portfolioIcons/node.png";
// import react from "../../portfolioIcons/react.png";
// import sb from "../../portfolioIcons/sb.png";
// import spring from "../../portfolioIcons/spring.png";
// import thyme from "../../portfolioIcons/thyme.png";
// import tw from "../../portfolioIcons/tw.png";
// import vsc from "../../portfolioIcons/vsc.png";

import "../App.css";

import "aos/dist/aos.css";
import "../../public/fonts.css";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Tools from "./skillset/Tools";
import Skillset from "./skillset/Skillset";

export default function Skills() {
  const data = [
    {
      name: "Git",
      img: `./public/portfolioIcons/git.png`,
    },
    {
      name: "GitHub",
      img: "./public/portfolioIcons/gh.png",
    },
    {
      name: "Docker",
      img: "./public/portfolioIcons/docker.png",
    },
    {
      name: "Notion",
      img: "./public/portfolioIcons/n.png",
    },
    {
      name: "Redux",
      img: "./public/portfolioIcons/rdx.png",
    },
    {
      name: "Postman",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
  ];

  return (
    <div id="skills" className=" bg-dark p-5 mt-3 bd-dark">
      <h1 className="pb-3 text-white text-center fondamento-regular">
        Tools , Languages , Frameworks And Libraries
      </h1>
      <div className="container-sm d-flex justify-content-center align-items-center flex-wrap gap-4">
        <Skillset heading={"Tools"} data={data} />
        <Tools />
        <Tools />
        <Tools />
        <Tools />
        <Tools />
      </div>
    </div>
  );
}
