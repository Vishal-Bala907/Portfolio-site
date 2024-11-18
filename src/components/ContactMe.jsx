import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "aos/dist/aos.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import bg from "../../public/portfolioIcons/bg.png";

export default function ContactMe() {
  return (
    <div
      id="contact"
      className="container text-white border border-white mt-5 mb-5"
      style={{
        borderRadius: "40px",
        overflow: "hidden",
        backgroundImage: `url(${bg})`,
      }}
      data-aos="fade-down"
    >
      <h1 className="text-center m-4 exo-2-writting fw-bold">Contact me</h1>
      <div className="container d-flex flex-column  bg-dark p-3 text-white justify-content-center column-gap-3 row-gap-3 align-items-center bg-transparent">
        <div className="form-container p-4">
          <form
            id="contactForm"
            className="d-flex flex-column justify-content-center gap-3"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            {/* <!-- Replace with your Access Key --> */}
            <input
              type="hidden"
              name="access_key"
              value="0bb57115-ac7e-4b69-9211-b11cc23e7f76"
            ></input>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" className="mt-3 btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="socialmedia">
          <ul className="list-inline d-flex flex-row justify-content-center flex-wrap gap-4 ">
            {/* <li className="list-inline-item">
              <p>Feel free to reach out to me via the following platforms:</p>
            </li> */}
            <li className="list-inline-item">
              <a href="tel:+9079018358" className="btn btn-outline-success">
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="mailto:vishal.bala.100@gmail.com"
                className="btn btn-outline-secondary"
              >
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/vishal-bala-4311a817a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="btn btn-outline-info"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.instagram.com/dev_vishalbala?igsh=MWU5eW56bmN4NGVqZg=="
                className="btn btn-outline-danger"
              >
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.instagram.com/dev_vishalbala?igsh=MWU5eW56bmN4NGVqZg=="
                className="btn btn-outline-primary "
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
