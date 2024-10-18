import img1 from "../images/daily-prog/1.png";
import img2 from "../images/daily-prog/2.png";
import img3 from "../images/daily-prog/3.png";
import img4 from "../images/daily-prog/4.png";
import img5 from "../images/daily-prog/5.png";

const DailyProgress = () => {
  return (
    <div className="container-fluid m-0 bg-dark">
      <div className="container-fluid bg-dark text-white" data-aos="fade-up">
        <div className="container text-center pt-3 pb-5 bg-dark">
          <h1>Hello 👋👋</h1>
          <p>Here is the detail information of my daily progress app</p>
          <p>This is webb-application built using React and Spring Boot</p>
          <p>Here are app description and snapshots</p>
          <span>
            You can check out the code on my github{" "}
            <a href="https://github.com/Vishal-Bala907/Frontends-in-react/tree/main/DailyProgressTracker"></a>
          </span>
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>Preview and snapshot of the daily progress tracker</h4>
        <ul className="pb-3">
          <li>Here is the landing page</li>
          <li>
            User will have 4 options to select
            <ol>
              <li>Add a completed task</li>
              <li>view the previous day data</li>
              <li>view the last 7 days data</li>
              <li>view the last 30 days data</li>
            </ol>
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <img
            className="preview-image"
            src={img1}
            alt="clock preview"
            data-aos="fade-down-left"
          />
        </div>
      </div>

      <div className="container bg-dark text-white" data-aos="fade-up">
        <hr className="m-0 pt-3 pb-3" />
        <h4>
          Here is the <b>Add Task</b> form
        </h4>
        <ul className="pb-3">
          <li>User can easily add the details of their task</li>
          <li>
            The backend is built using spring boot and postgress was used as the
            database solution
          </li>
          <li>
            proper data validation was applied from both, the frontend and
            backend
          </li>
          <li>
            on successful submission or error, the appropriate notification is
            displayed on the screen
          </li>
        </ul>
        <div className="container d-flex flex-wrap justify-content-center gap-5">
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
        <h4>Watching and monitoring data</h4>
        <ul className="pb-3">
          <li>user can watch the previous/last 7/last 30 days data</li>
          <li>user can even see the data of a particular date</li>
          <li>
            2 Pie charts has used to display data for great understanding
            <ol>
              <li>
                The first chart will display portion of time you spent on each
                task from your total spent time
              </li>
              <li>
                The second chat will display the same data against 24 hours
              </li>
            </ol>
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
    </div>
  );
};

export default DailyProgress;
