import "../App.css";

import "aos/dist/aos.css";
import "../../public/fonts.css";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Skillset from "./skillset/Skillset";

import {
  data,
  databases,
  framework,
  ides,
  LangData,
  UiLibs,
} from "./skillset/Skills";
import CurrentLearning from "./skillset/CurrentLearning";
import Future from "./skillset/Future";

// import m from "../../public/portfolioIcons/git.png";

export default function Skills() {
  return (
    <div id="skills" className=" bg-dark p-5 mt-3 bd-dark">
      <h1 className="pb-3 text-white text-center fondamento-regular">
        Tools , Languages , Frameworks And Libraries
      </h1>
      <div className="container-sm d-flex justify-content-center align-items-center flex-wrap gap-4">
        <Skillset heading={"Tools"} data={data} />
        <Skillset heading={"Languages"} data={LangData} />
        <Skillset heading={"Framework"} data={framework} />
        <Skillset heading={"UI & Libs"} data={UiLibs} />
        <Skillset heading={"Databases"} data={databases} />
        <Skillset heading={"IDE's"} data={ides} />
      </div>
      <CurrentLearning />
      <Future />
    </div>
  );
}
