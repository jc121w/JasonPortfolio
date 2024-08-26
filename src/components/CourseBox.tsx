import { motion } from "framer-motion";
import React from "react";
const variants = {
  animate: {
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const courseVariants = {
  animate: { x: 0, opacity: 1 },
  initial: { x: 100, opacity: 0 },
};
export const CourseBox = () => {
  const courses: string[] = [
    "Object-Oriented Programming I & II",
    "Data Structures & Algorithms",
    "Advanced Data Structures",
    "Programming Handheld Systems",
    "Database Design",
    "Intro to Artificial Intelligence",
    "Computer & Network Security",
  ];
  return (
    <motion.div
      variants={variants}
      whileInView="animate"
      initial="initial"
      viewport={{ once: true }}
      className="p-5 rounded-xl md:grid-cols-2 sm:grid-cols-1 grid gap-6 mt-10  bg-[#E0E1DD]"
    >
      {courses.map((courseName) => {
        return (
          <motion.div
            variants={courseVariants}
            whileHover={{ scale: 1.07 }}
            className="border border-[#1B263B] rounded-xl bg-[#778DA9] w-full h-fit text-[#0D1B2A] p-3 text-center"
          >
            {" "}
            {courseName}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
