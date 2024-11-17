import styles from "./Skills.module.css";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "aos/dist/aos.css";

const Skillset = ({ heading, data }) => {
  return (
    <div
      className={`${styles.gradient} ${styles.breakpoint} p-1 rounded-3 exo-2-writting`}
      data-aos="fade-up"
    >
      <div className="w-100 h-100 p-3 rounded-3 bg-dark d-flex   flex-column  ">
        <p
          style={{ borderBottom: "1px solid #ffffff75" }}
          className="text-white fs-1 text-center"
        >
          {heading}
        </p>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 ">
          {data.map((skill, index) => {
            return (
              <Tippy
                key={index}
                placement="top"
                animation="fade"
                theme="tomato"
                arrow={true}
                content={<span>{skill.name}</span>}
              >
                <img
                  className={styles.icons}
                  src={skill.img}
                  alt="git"
                  data-aos="flip-left"
                />
              </Tippy>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skillset;
