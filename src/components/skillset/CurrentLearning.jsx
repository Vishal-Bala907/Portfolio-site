import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "aos/dist/aos.css";
import styles from "./Skills.module.css";

const CurrentLearning = () => {
  return (
    <div
      className="container-md w-75 bg-white my-5 p-3 rounded-3"
      data-aos="flip-up"
    >
      <h1 className="text-center text-dark">Currently Diving deeper into</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
        <Tippy
          placement="top"
          animation="fade"
          theme="tomato"
          arrow={true}
          content={<span>ThreeJS</span>}
        >
          <img
            data-aos="zoom-in"
            className={styles.icons}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg"
          />
        </Tippy>
        <Tippy
          placement="top"
          animation="fade"
          theme="tomato"
          arrow={true}
          content={<span>DSA</span>}
        >
          <img
            data-aos="zoom-in"
            className={styles.icons}
            src="https://img.icons8.com/ios-filled/50/area-chart.png"
          />
        </Tippy>
        <Tippy
          placement="top"
          animation="fade"
          theme="tomato"
          arrow={true}
          content={<span>Moicroservices</span>}
        >
          <img
            data-aos="zoom-in"
            className={styles.icons}
            src="https://img.icons8.com/ios/50/network--v1.png"
          />
        </Tippy>
        <Tippy
          placement="top"
          animation="fade"
          theme="tomato"
          arrow={true}
          content={<span>Docker</span>}
        >
          <img
            data-aos="zoom-in"
            className={styles.icons}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
          />
        </Tippy>
        <Tippy
          placement="top"
          animation="fade"
          theme="tomato"
          arrow={true}
          content={<span>Redis</span>}
        >
          <img
            data-aos="zoom-in"
            className={styles.icons}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
          />
        </Tippy>
      </div>
    </div>
  );
};

export default CurrentLearning;
