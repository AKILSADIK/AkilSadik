import React from "react";
import Skill from "../components/skill";
import style from "../styles/skills.module.css";
import githubImg from "./Images/github.png";
import gitImg from "./Images/git.png";
import AwsImg from "./Images/aws.png";
import DevopsImg from "./Images/devops.jpeg";
import vsImg from "./Images/vscode.jpg";
import postmanImg from "./Images/postman.jpg";
import { motion, Variants } from "framer-motion";

const Tools = () => {
  const jsImg =
    "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png";
  const chakraImg =
    "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg";
  const containerAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
      y: -80,
      opacity: 1,

      transition: { duration: 0.8 },
    },
  };
  return (
    <div id="tools" className={`${style.skillsContainer}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="TOOLS"
      >
        Tools
      </motion.h2>

      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={containerAnimate}
      >
        <div className={`${style.container}`}>
          <Skill img={vsImg} name={"VS Code"} />
          <Skill img={githubImg} name={"GitHub"} />
          <Skill img={gitImg} name={"Git"} />
          <Skill img={postmanImg} name={"Postman"} />
          <Skill img={AwsImg} name={"AWS"} />
          <Skill img={DevopsImg} name={"Devops"} />
        </div>
      </motion.div>
    </div>
  );
};

export default Tools;
