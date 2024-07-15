import React from "react";

import img1 from "../images/temple/homepage/1.png";
import img2 from "../images/temple/homepage/2.png";
import login from "../images/temple/homepage/login.png";
import su from "../images/temple/homepage/su.png";
import suerr from "../images/temple/homepage/suerr.png";

// COMMON IMPORT
import profile from "../images/temple/common/profile.png";
import about from "../images/temple/common/about.png";
import about2 from "../images/temple/common/about2.png";
import about3 from "../images/temple/common/about3.png";
import artist from "../images/temple/common/artist.png";
import cart from "../images/temple/common/cart.png";
import darshan from "../images/temple/common/darshan.png";
import donation from "../images/temple/common/donation.png";
import hall from "../images/temple/common/hall.png";
import rec from "../images/temple/common/rec.png";
import pooja from "../images/temple/common/pooja.png";
import shop from "../images/temple/common/shop.png";

import add from "../images/temple/admin/add.png";
import remove from "../images/temple/admin/remove.png";

export default function Temple() {
  return (
    <div className="container-fluid m-0 bg-dark">
      <div className="container-fluid bg-dark text-white" data-aos="fade-up">
        <div className="container text-center pt-3 pb-5 bg-dark">
          <h1>Hello 👋👋</h1>
          <p>Here is the detail information of my Temple Trust webb app app</p>
          <p>
            This is a webb application build in SpringBoot, thymeleaf,
            HTML/CSS/JS , Bootstrap, Spring Security, MySQL, Razorpay
          </p>
          <p>Here are app description and snapshots</p>
          <span>
            You can check out the code on my github <a href=""></a>
          </span>
          <h5>This app will provides role based view</h5>
        </div>
      </div>
      {/* HOMEPAGE */}
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Homepage</h4>
        <ul className="pb-3">
          <li>Anyone can access the home page without any login</li>
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
        <h4>Preview and snapshot of the Login page</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={login}
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
        <h4>Preview and snapshot of the Sign-up page</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={su}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={suerr}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      {/* COMMON */}
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Common pages</h4>
        <p>These pages are between all logged-in users and Admin</p>

        <h4>Profile</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={profile}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Shop</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={shop}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>cart</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={cart}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Darshan slot booking form</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={darshan}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>pooja slot booking form</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={pooja}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Artist booking form</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={artist}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Hall booking form</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={hall}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>
          After booking pooja/darshan/ slot , artist or hall user will receive a
          recipt
        </h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={rec}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Donation form</h4>
        <ul className="pb-3">
          <li>User can donate money/ration</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={donation}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>About page</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={about}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={about2}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={about3}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      {/* ENDING */}
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Admin specific pages</h4>
        <p>These pages can only be access by Admin</p>

        <h4>Add product page</h4>

        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={add}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />

        <h4>Remove product page</h4>

        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={remove}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
    </div>
  );
}
