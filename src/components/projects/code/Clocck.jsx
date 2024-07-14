import React from "react";

import img1 from "../images/clock/clock1.png";
import img2 from "../images/clock/clock1.png";
import img3 from "../images/clock/clock1.png";
import img4 from "../images/clock/clock1.png";
import img5 from "../images/clock/clock1.png";
import img6 from "../images/clock/clock1.png";
import img7 from "../images/clock/clock1.png";
import img8 from "../images/clock/clock1.png";
import "aos/dist/aos.css";

export default function Clocck() {
  return (
    <div className="container-fluid m-0 bg-dark">
      <div className="container-fluid bg-dark text-white" data-aos="fade-up">
        <div className="container text-center pt-3 pb-5 bg-dark">
          <h1>Hello 👋👋</h1>
          <p>Here is the detail information of my clock app</p>
          <p>
            This is a desktop application build in Java's UI framework JavaFX
          </p>
          <p>Here are app description and snapshots</p>
          <span>
            You can check out the code on my github <a href=""></a>
          </span>
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the clock</h4>
        <ul className="pb-3">
          <li>user can switch between 12hr/24hr time format</li>
          <li>
            they can switch between clock/stopwatch and timer by using the drop
            down menu
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img1}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={img2}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the timer</h4>
        <ul className="pb-3">
          <li>
            user can start/puase and stop the timer any time using the
            start/stop and pause button
          </li>
          <li>
            they can switch between clock/stopwatch and timer by using the drop
            down menu
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img3}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={img4}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={img5}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the stopwatch</h4>
        <ul className="pb-3">
          <li>user can start or reset the stopwatch at any time</li>
          <li>
            they can also record the time stamps by clicking on the flag button
          </li>
          <li>
            they can switch between clock/stopwatch and timer by using the drop
            down menu
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img6}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={img7}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={img8}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
    </div>
  );
}
