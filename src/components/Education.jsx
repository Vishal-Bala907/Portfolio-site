import school from "../../public/portfolioIcons/school.png";
import college from "../../public/portfolioIcons/college.png";
import "aos/dist/aos.css";

const Education = () => {
  return (
    <div className="container-md mb-5 ">
      <h2 className="text-white w-100 text-center my-4">
        Educational Background
      </h2>
      <div
        className="bg-white py-3 rounded-4 mb-3  d-flex flex-row justify-content-evenly align-items-center gap-4 flex-wrap"
        data-aos="zoom-in-down"
      >
        <img style={{ height: "150px" }} src={school} alt="school" />
        <p className="fs-4 fw-bold">
          Govt. sr. sec. School Dadabari kota (Raj.)
        </p>
        <table>
          <tbody>
            <tr>
              <td className="fw-bold">Field : </td>
              <td>Science & Maths</td>
            </tr>
            <tr>
              <td className="fw-bold">Board :</td>
              <td>RBSE</td>
            </tr>
            <tr>
              <td className="fw-bold">Marks :</td>
              <td>77.80%</td>
            </tr>
            <tr>
              <td className="fw-bold">Year :</td>
              <td>2020</td>
            </tr>
          </tbody>
        </table>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.327014556322!2d75.83201037545534!3d25.1584336777359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85340809fb37%3A0x8ed9a12d634e32df!2sGOVT%20SR%20SEC%20SCHOOL%20GHODEVALA%20DADABARI%20KOTA!5e0!3m2!1sen!2sin!4v1731906784780!5m2!1sen!2sin"
          width="600"
          height="450"
          className="rounded-3"
          style={{ height: "150px", width: "240px", border: "1px solid black" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div
        className="bg-white py-3 rounded-4  d-flex flex-row justify-content-evenly align-items-center gap-4 flex-wrap"
        data-aos="zoom-in-down"
      >
        <img style={{ height: "150px" }} src={college} alt="school" />
        <p className="fs-4 fw-bold">Maa bharti PG college kota (Raj.)</p>
        <table>
          <tbody>
            <tr>
              <td className="fw-bold">Course : </td>
              <td>BCA</td>
            </tr>
            <tr>
              <td className="fw-bold">Marks :</td>
              <td>86.95%</td>
            </tr>
            <tr>
              <td className="fw-bold">Year :</td>
              <td>2021-2024</td>
            </tr>
          </tbody>
        </table>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.9485131000397!2d75.8355733754547!3d25.1374314777495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85164b2fae33%3A0x2809780229a969ea!2sMaa%20Bharti%20PG%20College%20%2C%20Kota!5e0!3m2!1sen!2sin!4v1731907771095!5m2!1sen!2sin"
          width="600"
          height="450"
          className="rounded-3"
          style={{ height: "150px", width: "240px", border: "1px solid black" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Education;
