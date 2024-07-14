import React from "react";
import styles from "../styles/vanta.module.css";
import img from "../../images/port.jpg";
import { motion } from "framer-motion";

export default function HeroCover() {
  return (
    <section id="#home" className={` ${styles.heroCover} `}>
      <motion.div
        className={`${styles.information}`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500, damping: 50 }}
      >
        <h1 className={`${styles.myname}`}>
          Hi, I am <span className="name">Vishal</span>
        </h1>
        <p>a professioanl</p>
        <h2 className={`${styles.myskills}`}>MERN & Springboot</h2>
        <p>developer</p>
      </motion.div>

      {/* <div className="image"> */}
      <motion.img
        src={img}
        alt="image"
        className={`${styles.userImage}`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500, damping: 50 }}
      />
      {/* </div> */}
    </section>
  );
}
