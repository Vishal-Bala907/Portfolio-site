import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "aos/dist/aos.css";
import "../../public/fonts.css";

export default function MySelf() {
  const element = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hii 👋",
        "My name is Vishal Bala",
        "A MERN and SpringBoot developer",
      ],
      typeSpeed: 30,
      backSpeed: 30,
      loop: true,
    };

    typed.current = new Typed(element.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div
      id="myself"
      className="container-fluid bg-dark text-white text-center fs-3 p-5  exo-2-writting"
    >
      <span className="typing fw-bold p-3 exo-2-writting" ref={element}></span>
      <p className="non-typing-texts ">
        <h4 className="p-3">About Me</h4>
        <p
          style={{ width: "75%", margin: "auto" }}
          className="fs-5 playwrite-gb-s-info"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          Hello! My name is Vishal Bala, a passionate software developer from
          Kota, Rajasthan, India. With a strong foundation in Spring Boot and
          MERN stack development, I am always eager to learn and explore new
          technologies.
          <br />I hold a BCA degree from Maa Bharti PG College, affiliated with
          Kota University. My continuous quest for improvement drives me to
          constantly enhance my skills and stay updated with the latest industry
          trends.
          <br />
          Welcome to my portfolio, where you can discover my journey, projects,
          and expertise in the world of software development.
        </p>
        <hr />
        <h3 className="fw-bold">Core Skills</h3>
        <div className="row d-flex justify-content-center align-items-center flex-wrap">
          {[
            "Spring",
            "Spring Boot",
            "Spring Security",
            "OAuth2",
            "Microservices",
            "MERN",
            "MySQL",
            "Docker",
            "Bootstrap",
            "Redis",
          ].map((skill) => (
            <div className="col-md-3 mb-4" key={skill} data-aos="fade-up">
              <div className="card skill-card">
                <div className="card-body">
                  <h5 className="card-title">{skill}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </p>
    </div>
  );
}
