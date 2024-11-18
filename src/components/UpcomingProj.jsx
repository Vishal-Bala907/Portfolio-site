import "aos/dist/aos.css";
const UpcomingProj = () => {
  return (
    <div className=" my-5">
      <p className="text-white text-center fs-3 fw-bold">Upcoming Projects</p>
      <div className="d-flex justify-content-center align-items-center gap-4 ">
        <div
          className="bg-white p-3 rounded-4 fs-3 fw-bold"
          data-aos="zoom-in-down"
        >
          Real-Time Chat App
          <p className="fs-5 fw-normal text-center">
            (currently working on it)
          </p>
        </div>
        <div
          className="bg-white p-3 rounded-4 fs-3 fw-bold"
          data-aos="zoom-in-down"
        >
          Job portal site
          <p className="fs-5 fw-normal text-center">(using microservices)</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProj;
