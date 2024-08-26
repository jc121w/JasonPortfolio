import { duration } from "@mui/material";
import { animate, delay, easeIn, motion } from "framer-motion";
import { CircleArrowDown, Scale } from "lucide-react";
import { init } from "next/dist/compiled/webpack/webpack";
import React from "react";

const variants = {
  animate: {
    transition: { staggerChildren: 1.3, delayChildren: 1 },
  },
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const picVariant = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      delay: 3.5,
      ease: "easeInOut",
      duration: 2,
    },
  },
};
const textVariant = {
  animate: {
    y: 0,
    opacity: [0, 0.1, 0.3, 0.5, 0.7, 1],
    transition: {
      duration: 0.8,
      times: [0, 0.2, 0.8, 0.9, 0.95, 1],
      ease: "easeInOut",
    },
  },
  initial: { y: 100, opacity: 0 },
};

const downButtonVariants = {
  animateDown: {
    y: 100,
    opacity: [0, 0.1, 0.3, 0.5, 0.7, 1, 1, 0],

    transition: {
      delay: 5,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.2, 0.4, 0.5, 0.6, 0.7, 0.9, 1],
      duration: 2,
    },
  },

  initial: { y: 0, opacity: 0 },
};

export const Hero = () => {
  return (
    <div className="flex flex-col justify-start h-screen gap-20 mt-5 2xl:justify-center">
      <motion.img
        src="/assets/GradPic.jpg"
        alt="hero_image"
        className="rounded-full w-[400px] h-[400px] object-cover 2xl:w-[500px] 2xl:h-[500px]"
        variants={picVariant}
        animate="animate"
        initial="initial"
      />
      <motion.div
        variants={variants}
        whileInView="animate"
        initial="initial"
        className="text-lg"
        viewport={{ once: true }}
      >
        <motion.h3
          variants={textVariant}
          className="text-3xl pb-3 2xl:text-5xl"
        >
          Hi, I'm Jason.{" "}
        </motion.h3>
        <motion.p variants={textVariant} className="text-pretty 2xl:text-xl">
          I'm a Software Engineer based in College Park, MD. I am a{" "}
          <b>Spring 2024</b> new grad with a <b>BS in Computer Science </b>
          from the <b>University of Maryland College Park</b> and am currently
          looking for New Grad positions!
        </motion.p>
      </motion.div>
      <motion.div
        variants={downButtonVariants}
        initial="initial"
        animate="animateDown"
      >
        <CircleArrowDown className="w-auto h-12 2xl:h-14 m-auto" />
      </motion.div>
    </div>
  );
};
