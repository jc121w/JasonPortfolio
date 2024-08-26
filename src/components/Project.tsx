import { animate, motion } from "framer-motion";
import React from "react";
interface Skill {
  src: string;
  name: string;
}

interface ProjectProps {
  name: string;
  skills: Skill[];
  src: string;
  desc: string;
  yt: string;
  git: string;
}

const projectVariants = {
  initial: { y: 300, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const Project = (props: ProjectProps) => {
  const GitHub = "/assets/GitHub.svg";
  const YouTube = "/assets/YouTube.svg";
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={projectVariants}
      viewport={{ once: true }}
      className="border max-w-3xl h-fit p-4 rounded-lg flex flex-col justify-between gap-4 border-[#1B263B]"
    >
      <div className="flex flex-col gap-3">
        <div className="text-xl">{props.name}</div>
        <div className="flex items-center justify-start gap-3 flex-wrap">
          Made with:{" "}
          {props.skills.map((skill: Skill) => {
            return (
              <img
                className="w-auto h-9"
                key={skill.name}
                src={skill.name === "Flutter" ? props.src : skill.src}
                alt={skill.name}
              />
            );
          })}
        </div>

        <div className="prose ">{props.desc}</div>
      </div>
      <div className="flex gap-4 ">
        {" "}
        <a
          className="border-2 p-3 border-[#1B263B] rounded-3xl hover:scale-[1.15] hover:border-[#778DA9] transition-all duration-200 active:scale-105"
          href={props.yt}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center gap-2">
            <img src={YouTube} alt="YouTube" />
            <span>Demo</span>
          </div>
        </a>
        <a
          className="border-2 p-3 border-[#1B263B] rounded-3xl hover:scale-[1.15] hover:border-[#778DA9] transition-all duration-200  active:scale-105"
          href={props.git}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center gap-1">
            <img src={GitHub} alt="GitHub" />
            <span> Github</span>
          </div>{" "}
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
