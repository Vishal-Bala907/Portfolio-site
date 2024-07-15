import React from "react";

import img1 from "../images/cafe-lite/1.png";
import img2 from "../images/cafe-lite/2.png";
import img3 from "../images/cafe-lite/3.png";
import img4 from "../images/cafe-lite/4.png";
import img5 from "../images/cafe-lite/5.png";
import img6 from "../images/cafe-lite/6.png";
import img7 from "../images/cafe-lite/7.png";
import img8 from "../images/cafe-lite/8.png";
import img8a from "../images/cafe-lite/8a.png";
import img9 from "../images/cafe-lite/9.png";
import img10 from "../images/cafe-lite/10.png";
import img11 from "../images/cafe-lite/11.png";
import img12 from "../images/cafe-lite/12.png";
import "aos/dist/aos.css";

export default function CafeLite() {
  return (
    <div className="container-fluid m-0 bg-dark">
      <div className="container-fluid bg-dark text-white" data-aos="fade-up">
        <div className="container text-center pt-3 pb-5 bg-dark">
          <h1>Hello 👋👋</h1>
          <p>Here is the detail information of my cafe management sytem</p>
          <p>This is a desktop application build in JavaFX and hibernate</p>
          <p>Here are app description and snapshots</p>
          <span>
            You can check out the code on my github <a href=""></a>
          </span>
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the app</h4>
        <ul className="pb-3">
          <li>The very first, users will see a splash screen</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img1}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          {/* <img
            className="preview-image"
            src={img2}
            alt="clock preview"
            data-aos="fade-down-right"
          /> */}
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Login-page</h4>
        <ul className="pb-3">
          <li>
            Any user other than Admin will have to click the direct login button
            to login
          </li>
          <li>
            Users other than Admin can only preapare bills and orders for the
            customers
          </li>
          <li>
            If they trying to access other option, a warning message will appear
            on the scree
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img2}
            alt="clock preview"
            data-aos="fade-down-right"
          />
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
        <h4>Preview and snapshot of the Add item page</h4>
        <ul className="pb-3">
          <li>User can add a new item by filling up the form</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img6}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Add Manage inventory page</h4>
        <ul className="pb-3">
          <li>Admin can Update/Remove an existing item from the inventory</li>
          <li>
            First, they have to search for the particular item with his name
          </li>
          <li>
            If the searched item exists, the the form below will automatically
            filled
          </li>
          <li>Otherwise user will see a warning that no items found</li>
          <li>If the item is found, user can update its values and save it</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
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
          <img
            className="preview-image"
            src={img8a}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Add Employee</h4>
        <ul className="pb-3">
          <li>User can add Employee by filling up the form</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img9}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the manageemployee Employee</h4>
        <ul className="pb-3">
          <li>User can add Employee by filling up the form</li>
          <li>
            First, they have to search for the particular employee with his name
          </li>
          <li>
            If the searched employee exists, the the form below will be
            automatically filled
          </li>
          <li>Otherwise user will see a warning that no items found</li>
          <li>
            If the employee is found, user can update their values and save it
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img10}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Add Booking</h4>
        <ul className="pb-3">
          <li>User can add new booking by filling up the form</li>
          <li>
            First, they need to select the date and then check the number of
            seats already booked for that day.
          </li>
          <li>
            If the maximum booking capacity for the day has not been exceeded,
            they can book seats for that day.
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img11}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the manageemployee Employee</h4>
        <ul className="pb-3">
          <li>User can add Update/remove bookings</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img12}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
    </div>
  );
}
