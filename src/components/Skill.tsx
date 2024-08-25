import { motion, Variants } from "framer-motion";
import React from "react";

interface SkillProps {
  variants: Variants;
  src: string;
  name: string;
}

export const Skill = (props: SkillProps) => {
  return (
    <motion.div className="p-2 " variants={props.variants}>
      <div className="hover:scale-[1.2] transition-transform duration-200 flex flex-col items-center p-1">
        {" "}
        <img className="w-auto h-14" src={props.src} alt="" />
        <div className="text-base pt-2"> {props.name} </div>{" "}
      </div>
    </motion.div>
  );
};
