import React from "react";
import Project from "../components/project";
import style from "../styles/projects.module.css";
import weefyimg from "./Images/weefy.png";
import paecifyimg from "./Images/paecify.png";


import { motion, Variants } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Paecify",
    subTitle: "A Full Stack lip reading application",
    img1: paecifyimg,
    desc: "Build a lip reading ML model in 7 days along with a team of 4 members.",
    techUsed: [
      "Flask",
      "Tailwind CSS",
      "HTML",
      "Javascript",
      "Python",
    ],
    features: [
      "Intro Page",
      "Detailed Explanation Page",
      "Try Now Page",
    ],
    resp: "Helped through out the completion of project from model development to completing the website",
    git: "https://github.com/AKILSADIK/IBM-HACK-CHALLENGE",
  },
  {
    id: 2,
    title: "Weefy",
    subTitle:
      "Weefy service company landing page.",
    img1: weefyimg,
    desc: "My personal project just to try the art of creating a landing page",
    techUsed: [
      "React",
      "Javascript",
      "Node",
      "Express",
      "Tailwind CSS",
    ],
    features: [ "Booking a meet", "Chat", "Follow User", "Email"],
    resp: "Contributed fully and completed the whole project by myself without any 3rd person involvement",
    git: "https://github.com/AKILSADIK/IBM-HACK-CHALLENGE",
  },

];

const Projects = () => {
  return (
    <div id="projects" className={`  ${style.projects}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="PROJECTS"
      >
        PROJECTS
      </motion.h2>
      <div className={` ${style.container}`}>
        {/*  */}
        {data.map((ele, ind) => (
          <Project key={ele.id} {...ele} ind={ind} />
        ))}

        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
