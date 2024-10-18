import bts from "../../portfolioIcons/bts.png";
import c from "../../portfolioIcons/c.png";
import cpp from "../../portfolioIcons/cpp.png";
import css from "../../portfolioIcons/css.png";
import docker from "../../portfolioIcons/docker.png";
import eclipse from "../../portfolioIcons/eclipse.png";
import ex from "../../portfolioIcons/ex.png";
import hibernate2 from "../../portfolioIcons/hibernate2.png";
import html from "../../portfolioIcons/html.png";
import intellij from "../../portfolioIcons/intellij.png";
import java from "../../portfolioIcons/java.png";
import js from "../../portfolioIcons/js.png";
import mate from "../../portfolioIcons/mate.png";
import mdb from "../../portfolioIcons/mdb.png";
import msql from "../../portfolioIcons/msql.png";
import n from "../../portfolioIcons/n.png";
import node from "../../portfolioIcons/node.png";
import rdx from "../../portfolioIcons/rdx.png";
import react from "../../portfolioIcons/react.png";
import sb from "../../portfolioIcons/sb.png";
import spring from "../../portfolioIcons/spring.png";
import thyme from "../../portfolioIcons/thyme.png";
import tw from "../../portfolioIcons/tw.png";
import vsc from "../../portfolioIcons/vsc.png";
import git from "../../portfolioIcons/git.png";
import gh from "../../portfolioIcons/gh.png";

import "../App.css";

import "aos/dist/aos.css";
import "../../public/fonts.css";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export default function Skills() {
  const imagearr = [
    spring,
    sb,
    react,
    ex,
    thyme,
    mdb,
    hibernate2,
    msql,
    bts,
    mate,
    node,
    tw,
    vsc,
    eclipse,
    intellij,
    git,
    gh,
    rdx,
    java,
    css,
    js,
    docker,
    c,
    html,
    cpp,
    n,
  ];
  const tt = [
    "spring",
    "spring boot",
    "react",
    "express js",
    "thymeleaf",
    "mongo db",
    "hibernate",
    "my sql",
    "bootstrap",
    "materialize",
    "node js",
    "tailwind",
    "vs code ide",
    "eclipse ide",
    "intellij ide",
    "git",
    "git-hub",
    "redux",
    "java",
    "css",
    "javascript",
    "docker",
    "c",
    "html",
    "c++",
    "notion",
  ];

  return (
    <div id="skills" className=" bg-dark p-5 mt-3 bd-dark">
      <h1 className="pb-3 text-white text-center fondamento-regular">
        Tools , Languages and Frameworks
      </h1>
      <div className="container-sm d-flex justify-content-center align-items-center flex-wrap">
        {imagearr.map((img, index) => {
          return (
            <Tippy
              key=""
              placement="top"
              animation="fade"
              theme="tomato"
              arrow={true}
              content={<span>{tt[index]}</span>}
            >
              <img
                className="skills-icons p-2 m-2"
                key=""
                src={`${img}`}
                data-aos="zoom-out-up"
              />
            </Tippy>
          );
        })}
      </div>
    </div>
  );
}
