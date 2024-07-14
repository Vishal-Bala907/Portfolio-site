import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Nav() {
  return (
    <>
      <nav
        className="container navbar navbar-expand-sm navbar-dark bg-dark"
        aria-label="Third navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarsExample03"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <HashLink
                  smooth
                  to="#home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </HashLink>
              </li>

              <li className="nav-item">
                <HashLink
                  smooth
                  to="#myself"
                  className="nav-link active"
                  aria-current="page"
                >
                  MySelf
                </HashLink>
              </li>

              <li className="nav-item">
                <HashLink
                  smooth
                  to="#skills"
                  className="nav-link active"
                  aria-current="page"
                >
                  Skills & Tech
                </HashLink>
              </li>

              <li className="nav-item">
                <HashLink
                  smooth
                  to="/#projects"
                  className="nav-link active"
                  aria-current="page"
                  // href="#projects"
                >
                  Projects
                </HashLink>
              </li>

              <li className="nav-item">
                <HashLink
                  smooth
                  to="#contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  Contact me
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
