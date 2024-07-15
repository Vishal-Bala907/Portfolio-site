import React from "react";
import projectInfoArray from "../../myporjects/info";
import styels from "../styles/projects.module.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
// import cafe1 from "../../myporjects/ProjectImages/cafe1.jpg";

export default function Projects() {
  function mouseOver(id) {
    let desc = document.getElementById(`desc-${id}`);

    desc.style.display = "flex";
  }

  function mouseLeave(id) {
    let desc = document.getElementById(`desc-${id}`);

    desc.style.display = "none";
  }

  let effect = ["fade-right", "fade-left"];
  let flag = false;
  return (
    <div
      id="projects"
      className="conatainer-sm text-dark"
      style={{ overflow: "hidden" }}
    >
      <h1 className="text-white text-center">Projects</h1>
      <div
        className="container-sm bg-dark p-4 d-flex justify-content-center flex-wrap position-relative"
        style={{ height: "fit-content" }}
      >
        {projectInfoArray.map((project) => {
          flag = !flag;
          return (
            <div
              data-aos={flag ? effect[0] : effect[1]}
              key={project.id}
              className={`p-3 m-3 text-center ${styels.parent}`}
              style={{ backgroundImage: `url('${project.image}')` }}
              onMouseEnter={() => mouseOver(project.id)}
              onMouseLeave={() => mouseLeave(project.id)}
            >
              <div id={`main-${project.id}`} className={`${styels.content}`}>
                <h3 className="text-center">{project.title}</h3>
                <hr />
                <h5>Tech Use</h5>
                <p>{project.tech}</p>
                <hr />
                <h5>Category</h5>
                <p>{project.category}</p>
              </div>

              <div className={`mt-4  ${styels.desc}`} id={`desc-${project.id}`}>
                <p>
                  <b> {project.desc}</b>
                </p>
                <Link
                  to={project.site}
                  type="button"
                  className="btn btn-primary"
                >
                  View Details
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  type="button"
                  className="btn btn-warning"
                >
                  View Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
