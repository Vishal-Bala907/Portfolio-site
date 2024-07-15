import React from "react";
import img1 from "../images/ec/homepage/1.png";
import img2 from "../images/ec/homepage/2.png";
import img3 from "../images/ec/homepage/3.png";
import img4 from "../images/ec/homepage/4.png";
import su from "../images/ec/homepage/su.png";
import login from "../images/ec/homepage/login.png";
// COMMON IMPORT
import about1 from "../images/ec/common/about1.png";
import about2 from "../images/ec/common/about2.png";
import cate from "../images/ec/common/cate.png";
import catemenu from "../images/ec/common/catemenu.png";
import commonoptions from "../images/ec/common/commonoptions.png";
import err from "../images/ec/common/err.png";
import profile from "../images/ec/common/pro.png";
import updateProfile from "../images/ec/common/up-pro.png";
import updateAddress from "../images/ec/common/up-add.png";
import menu from "../images/ec/common/menu.png";
import cart from "../images/ec/common/cart.png";
import pay from "../images/ec/common/pay.png";
import of1 from "../images/ec/EmpAnnADMIN/1.png";
import of2 from "../images/ec/EmpAnnADMIN/2.png";
import of3 from "../images/ec/EmpAnnADMIN/search.png";
// admin import
import addEmp from "../images/ec/admin/addEmp.png";
import additems from "../images/ec/admin/addEmp.png";
import adminoptions from "../images/ec/admin/adminoptions.png";
import dis from "../images/ec/admin/dis.png";
import emopdetails from "../images/ec/admin/emopdetails.png";
import empview from "../images/ec/admin/empview.png";
import filter from "../images/ec/admin/filter.png";
import filtered from "../images/ec/admin/filtered.png";
import manage from "../images/ec/admin/manage.png";
import manageparod from "../images/ec/admin/manageparod.png";
import updatevalues from "../images/ec/admin/updatevalues.png";
import dash from "../images/ec/admin/dash.png";

export default function ECommerceWebbApp() {
  return (
    <div className="container-fluid m-0 bg-dark">
      <div className="container-fluid bg-dark text-white" data-aos="fade-up">
        <div className="container text-center pt-3 pb-5 bg-dark">
          <h1>Hello 👋👋</h1>
          <p>Here is the detail information of my E-Commerce restaurantapp</p>
          <p>
            SpringBoot, thymeleaf, HTML/CSS/JS, Spring Security, MySQL,
            Razorpay,Font-awsome,PrintJs,ChartJS
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
        </div>
      </div>

      {/*********************** LOGIN PAGE & SIGNUOP ****************************/}
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
        </div>
      </div>
      {/*********************** COMMON PAGES ****************************/}
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Common pages</h4>
        <p>These pages are between all logged-in users and Admin</p>

        <h4>Common options</h4>
        <ul className="pb-3">
          <li>Profile</li>
          <li>Update profile</li>
          <li>Category</li>
          <li>Menu</li>
          <li>Error pages</li>
          <li>About section</li>
          <li>Cart</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={commonoptions}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>profile</h4>
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
        <h4>Update profile</h4>
        <ul className="pb-3">
          <li>
            User can update profile and Address by navigating to update profile
            button
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={updateProfile}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={updateAddress}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>

      {/* CATEGOTY */}
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Category view</h4>
        <ul className="pb-3">
          <li>
            User can view and select differt categories from the category menu
          </li>
          <li>
            Clicking on any category will redirect the user to a page where all
            the items of that category are listed.
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={cate}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={catemenu}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
      {/* MENU */}
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Menu view</h4>
        <ul className="pb-3">
          <li>
            User can view and select differt products from the menu option
          </li>
          <li>
            By Clicking on Add button will add that item to the user's cart
          </li>
          <li>
            Each time users click "Add" on a particular item, the number of
            items added to the cart will increase accordingly.
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={menu}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      {/* CART */}
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Cart view</h4>
        <ul className="pb-3">
          <li>Users can view the items they added in the cart</li>
          <li>They can remove an item by clicking on the "Remove" button</li>
          <li>
            They pay button will promt user to pay the amout for placing the
            order
          </li>
          <li>User can update their addredd before placing their order</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={cart}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={pay}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Error page</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={err}
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
            src={about1}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={about2}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
      {/* COMMON TO EMPLOYEE AND ADMIN */}
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Common pages</h4>
        <p>These pages are between all logged-in users and Admin</p>

        <h4>Common options</h4>
        <ul className="pb-3">
          <li>Profile</li>
          <li>Update profile</li>
          <li>Category</li>
          <li>Menu</li>
          <li>Error pages</li>
          <li>About section</li>
          <li>Cart</li>
          <li>Offline billing</li>
        </ul>
        <h4>Offline Billing</h4>
        <ul>
          <li>User can create bills and orders for their retail outlets</li>
          <li>They can add items to bill with their quantities</li>
          <li>They can search for an item using the search option</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={of1}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={of2}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={of3}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      {/* ********** ADMIN VIEW ************* */}
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Admin specific pages</h4>
        <p>These pages can only be accessed by ADMIN</p>

        <h4>Common options</h4>
        <ul className="pb-3">
          <li>Add employ</li>
          <li>Dispatch/Cancel order</li>
          <li>Manage items and categories</li>
          <li>View user details</li>
          <li>View Dashboard</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={adminoptions}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Add Employee</h4>
        <ul className="pb-3">
          <li>
            Admin can make an existing user an employee by simply changing their
            role from USER to EMPLOYEE.
          </li>
          <li>
            Also admin has to fil some extra information about the emplopyee
            <ul>
              <li>Salary</li>
              <li>Post</li>
              <li>Date of Joining</li>
            </ul>
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={addEmp}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>View User details</h4>
        <ul className="pb-3">
          <li>Admin can view details of any users</li>
          <li>He can also print the users information</li>
          <li>
            He can view the list of all users by their specific roles.
            <ul>
              <li>CUSTOMER</li>
              <li>EMPLOYEE</li>
            </ul>
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={empview}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={filter}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={filtered}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={emopdetails}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Add items</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={additems}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Manage items</h4>
        <ul className="pb-3">
          <li>The manage page will display all the categories available.</li>
          <li>Users can select a category to manage it.</li>
          <li>
            Clicking on any category will redirect the user to a page where all
            the items in that category are listed.
          </li>
          <li>Now users can update the category details.</li>
          <li>Items related to that category are listed below.</li>
          <li>
            If users click on the 'Update' button of any item, the update form
            for that item will be displayed.
          </li>
          <li>Now users can update items as well.</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={manage}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={manageparod}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={updatevalues}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Manage Orders</h4>
        <ul className="pb-3">
          <li>Admin can dispatch or cancel an order.</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={dis}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Dashboard</h4>
        <ul className="pb-3">
          <li>Admin can dispatch or cancel an order.</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={dash}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      {/* END */}
    </div>
  );
}
