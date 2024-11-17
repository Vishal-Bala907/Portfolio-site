import git from "../../../public/portfolioIcons/git.png";
import gh from "../../../public/portfolioIcons/gh.png";
import docker from "../../../public/portfolioIcons/docker.png";
import n from "../../../public/portfolioIcons/n.png";
import rdx from "../../../public/portfolioIcons/rdx.png";
import styles from "./Skills.module.css";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const Tools = () => {
  return (
    <div
      className={`${styles.gradient} ${styles.breakpoint} p-1 rounded-3 exo-2-writting`}
    >
      <div className="w-100 p-3 rounded-3 bg-dark ">
        <p
          style={{ borderBottom: "1px solid #ffffff75" }}
          className="text-white fs-1 text-center"
        >
          Tools
        </p>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
          <Tippy
            key=""
            placement="top"
            animation="fade"
            theme="tomato"
            arrow={true}
            content={<span>Git</span>}
          >
            <img className={styles.icons} src={git} alt="git" />
          </Tippy>

          <Tippy
            key=""
            placement="top"
            animation="fade"
            theme="tomato"
            arrow={true}
            content={<span>GitHub</span>}
          >
            <img className={styles.icons} src={gh} alt="git" />
          </Tippy>

          <Tippy
            key=""
            placement="top"
            animation="fade"
            theme="tomato"
            arrow={true}
            content={<span>Docker</span>}
          >
            <img className={styles.icons} src={docker} alt="git" />
          </Tippy>

          <Tippy
            key=""
            placement="top"
            animation="fade"
            theme="tomato"
            arrow={true}
            content={<span>Notion</span>}
          >
            <img className={styles.icons} src={n} alt="git" />
          </Tippy>

          <Tippy
            key=""
            placement="top"
            animation="fade"
            theme="tomato"
            arrow={true}
            content={<span>Redux</span>}
          >
            <img className={styles.icons} src={rdx} alt="git" />
          </Tippy>
          <Tippy
            key=""
            placement="top"
            animation="fade"
            theme="tomato"
            arrow={true}
            content={<span>Postman</span>}
          >
            <img
              className={styles.icons}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
            />
          </Tippy>
        </div>
      </div>
    </div>
  );
};

export default Tools;
