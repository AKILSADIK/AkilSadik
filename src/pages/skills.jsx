import React from "react";
import Skill from "../components/skill";
import style from "../styles/skills.module.css";
import reactImg from "./Images/react-400.png";
import htmlImg from "./Images/html.png";
import cssImg from "./Images/css.png";
import javaImg from "./Images/java.png";
import python from "./Images/Python.jpeg";
import nodeJSImg from "./Images/nodejs.png";
import mongoJSImg from "./Images/mongo.png";
import expressImg from "./Images/express.png";
import tailwind from "./Images/tailwind.jpg"
import flutter from "./Images/flutter.png"
import android from "./Images/android.png"

import { motion, Variants } from "framer-motion";
// --
//--
const Skills = () => {
  const jsImg =
    "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
  const chakraImg = "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg"
  const containerAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
      y: -80,
      opacity: 1,

      transition: { duration: 0.8 },
    },
  };
  return (
    <div id="skills" className={`${style.skillsContainer}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="SKILLS"
      >
        SKILLS
      </motion.h2>
     
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={containerAnimate}
      >
        
        <div className={`${style.container}`}>
          <Skill img={htmlImg} name={"HTML"} />
          <Skill img={cssImg} name={"CSS"} />
          <Skill img={jsImg} name={"JS"} />
          <Skill img={javaImg} name={"JAVA"} />
          <Skill img={flutter} name={"Flutter"} />
          <Skill img={reactImg} name={"React"} />
          <Skill img={android} name={"Android Studio"} />
          <Skill img={tailwind} name={"Tailwind"} />
          <Skill img={nodeJSImg} name={"Node Js"} />
          <Skill img={mongoJSImg} name={"Mongo"} />
          <Skill img={expressImg} name={"Express"} />
          <Skill img={python} name={"Python"} />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
