import img0 from "../images/cafe-adv/0.png";
import img1 from "../images/cafe-adv/1.png";
import img2 from "../images/cafe-adv/2.png";
import img3 from "../images/cafe-adv/3.png";
import img5 from "../images/cafe-adv/5.png";
import img6 from "../images/cafe-adv/6.png";
import img7 from "../images/cafe-adv/7.png";
import img8 from "../images/cafe-adv/8.png";
import img9 from "../images/cafe-adv/9.png";
import img10 from "../images/cafe-adv/10.png";
import img11 from "../images/cafe-adv/11.png";
import img12 from "../images/cafe-adv/12.png";
import img13 from "../images/cafe-adv/13.png";
import img14 from "../images/cafe-adv/14.png";
import img15 from "../images/cafe-adv/15.png";
import img16 from "../images/cafe-adv/16.png";
import img17 from "../images/cafe-adv/17.png";
import img18 from "../images/cafe-adv/18.png";
import img19 from "../images/cafe-adv/19.png";
import img20 from "../images/cafe-adv/20.png";
import "aos/dist/aos.css";

export default function CafeAdv() {
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
            src={img0}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Login-page</h4>
        <ul className="pb-3">
          <li>Users have to login first for accessing the application</li>
          <li>Ther users will see role based view</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img1}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Role other than Admin</h4>
        <ul className="pb-3">
          <li>These users can acess only 4 features</li>
          <ol type="1">
            <li>Vey Basic Dashoard</li>
            <li>Menu and Bill</li>
            <li>Inventory</li>
            <li>Booking</li>
          </ol>
        </ul>
        <h4>Dashboard</h4>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img2}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Menu page</h4>
        <ul className="pb-3"></ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img3}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of inventory page</h4>
        <ul className="pb-3">
          <li>user can add/remove or update items</li>
          <li>By clicking on add</li>
          <ul>
            <li>A form will apprear</li>
            <li>
              User have to fill this form and click on add button to add items
              to the inventory
            </li>
            <li>
              After adding, clicking the refresh button will refresh the list
            </li>
            <li>This process is same for the rest Update/remove button</li>
            <li>
              The remove all button will remove all the inventory data after
              confirmation
            </li>
          </ul>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          {/* <div> */}
          <img
            className="preview-image"
            src={img11}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          {/* </div> */}
          <img
            className="preview-image"
            src={img12}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={img13}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the booking page page</h4>
        <ul className="pb-3">
          <li>The Book button will add a new booking</li>
          <li>The remove button removes a booking</li>
          <li>The remove all booking will remove all the bookings</li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img5}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the new booking page page</h4>
        <ul className="pb-3">
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
            src={img5}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>

      {/**************************************** ADMIN ****************************************/}
      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Role Admin</h4>
        <ul className="pb-3">
          <li>Admin can acess only 5 features</li>
          <ol type="1">
            <li>More advance Dashoard</li>
            <li>Menu and Bill</li>
            <li>Inventory</li>
            <li>Booking</li>
            <li>Employee</li>
          </ol>
        </ul>
        <h4>Dashboard</h4>
        <ul>
          <li>Admin can see quick info about </li>
          <ul>
            <li>Number of employee</li>
            <li>Sales</li>
            <li>Income</li>
            <li>Products</li>
          </ul>
          <li>Admin can also view Graphical data</li>
          <ul>
            <li>Admin can swtich between different data</li>
            <li>
              Admin can also select what time of data we want to display on the
              graph
            </li>
            <ol>
              <li>Today</li>
              <li>Last day</li>
              <li>Last Week</li>
              <li>last month</li>
              <li>All</li>
            </ol>
          </ul>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img18}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={img19}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={img20}
            alt="clock preview"
            data-aos="fade-down-right"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of inventory page</h4>
        <ul className="pb-3">
          <li>Admin can add/remove or update items</li>
          <li>By clicking on add</li>
          <ul>
            <li>A form will apprear</li>
            <li>
              The admin has to fill out this form and click on the "Add" button
              to add items to the inventory.
            </li>
            <li>
              After adding, clicking on the refresh button will refresh the list
            </li>
            <li>This process is same for the rest Update/remove button</li>
            <li>
              The remove all button will remove all the inventory data after
              confirmation
            </li>
          </ul>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          {/* <div> */}
          <img
            className="preview-image"
            src={img10}
            alt="clock preview"
            data-aos="fade-down"
          />
          <img
            className="preview-image"
            src={img11}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          {/* </div> */}
          <img
            className="preview-image"
            src={img12}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={img13}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          {/* <img
            className="preview-image"
            src={img17}
            alt="clock preview"
            data-aos="fade-down-right"
          /> */}
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the booking page page</h4>
        <ul className="pb-3">
          <li>The Book button will add a new booking</li>
          <li>The remove button removes a booking</li>
          <li>The remove all booking will remove all the bookings</li>
        </ul>
        <ul className="pb-3">
          <li>Admin can Update/Remove an Bookings from</li>
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
            src={img7}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={img8}
            alt="clock preview"
            data-aos="fade-down-left"
          />
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
        <h4>Preview and snapshot of the Menu page</h4>
        <ul className="pb-3"></ul>
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
        <h4>Preview and snapshot of Employee page</h4>
        <ul className="pb-3">
          <li>Admin can add/remove or update Employees</li>
          <li>By clicking on add</li>
          <ul>
            <li>A form will apprear</li>
            <li>
              The admin has to fill out this form and click on the "Add" button
              to add new employee.
            </li>
            <li>
              After adding, clicking on the refresh button will refresh the list
            </li>
            <li>
              Admin has to assign a username and a password for the employee, so
              he can login to the system later
            </li>
            <li>This process is same for the rest Update/remove button</li>
            <li>
              The remove all button will remove all the inventory data after
              confirmation
            </li>
          </ul>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          {/* <div> */}
          <img
            className="preview-image"
            src={img14}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          {/* </div> */}
          <img
            className="preview-image"
            src={img15}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={img16}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={img17}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          {/* <img
            className="preview-image"
            src={img17}
            alt="clock preview"
            data-aos="fade-down-right"
          /> */}
        </div>
      </div>

      {/* fsdljhgoirfedjgifjoigufdiopugjfipdug */}
      {/* <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the new booking page page</h4>
        <ul className="pb-3">
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
            // src={img8a}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the Add Manage Booking page</h4>
        <ul className="pb-3">
          <li>Admin can Update/Remove an Bookings from</li>
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
            src={img7}
            alt="clock preview"
            data-aos="fade-down-right"
          />
          <img
            className="preview-image"
            src={img8}
            alt="clock preview"
            data-aos="fade-down-left"
          />
          <img
            className="preview-image"
            src={img9}
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
      </div> */}
    </div>
  );
}
