import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "aos/dist/aos.css";
import styles from "./Skills.module.css";

const Future = () => {
  return (
    <div
      className="container-md w-75 bg-white my-5 p-3 rounded-3"
      data-aos="flip-up"
    >
      <h1 className="text-center text-dark">In future i will deep dive into</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
        <Tippy
          placement="top"
          animation="fade"
          theme="tomato"
          arrow={true}
          content={<span>Kubernetes</span>}
        >
          <img
            data-aos="zoom-in"
            className={styles.icons}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
          />
        </Tippy>
        <Tippy
          placement="top"
          animation="fade"
          theme="tomato"
          arrow={true}
          content={<span>Linux</span>}
        >
          <img
            data-aos="zoom-in"
            className={styles.icons}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
          />
        </Tippy>
        <Tippy
          placement="top"
          animation="fade"
          theme="tomato"
          arrow={true}
          content={<span>MongoDB</span>}
        >
          <img
            data-aos="zoom-in"
            className={styles.icons}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          />
        </Tippy>
        <Tippy
          placement="top"
          animation="fade"
          theme="tomato"
          arrow={true}
          content={<span>Kafka</span>}
        >
          <img
            data-aos="zoom-in"
            className={styles.icons}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg"
          />
        </Tippy>
        <Tippy
          placement="top"
          animation="fade"
          theme="tomato"
          arrow={true}
          content={<span>Android</span>}
        >
          <img
            data-aos="zoom-in"
            className={styles.icons}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
          />
        </Tippy>
        <Tippy
          placement="top"
          animation="fade"
          theme="tomato"
          arrow={true}
          content={<span>React native</span>}
        >
          <img
            data-aos="zoom-in"
            className={styles.icons}
            src="https://img.icons8.com/ios/50/react-native--v1.png"
            alt="react-native--v1"
          />
        </Tippy>
      </div>
    </div>
  );
};

export default Future;
