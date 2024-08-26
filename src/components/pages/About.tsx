"use client";
import React, { useState } from "react";
import { School } from "../School";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
import { About_Box } from "../AboutBox";
import { CourseBox } from "../CourseBox";
import { animate, motion } from "framer-motion";
import { duration } from "@mui/material";

const buttonVariants = {
  animateR: {
    x: 100,
    opacity: [0, 0.1, 0.3, 0.5, 0.7, 1, 1, 0],
    transition: {
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.2, 0.4, 0.5, 0.6, 0.7, 0.9, 1],
      duration: 2.25,
    },
  },
  animateL: {
    x: -100,
    opacity: [0, 0.1, 0.3, 0.5, 0.7, 1, 1, 0],
    transition: {
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.2, 0.4, 0.5, 0.6, 0.7, 0.9, 1],
      duration: 2.25,
    },
  },
  initial: { x: 0, opacity: 0 },
  set: { x: 0, opacity: 1 },
};

export const About = () => {
  const [currInd, setCurrInd] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const pageList = [<About_Box />, <CourseBox />];
  const pageTitles = ["Get To Know Me", "Relevant Coursework"];
  const handleLeftClick = () => {
    if (currInd === 0) {
      setCurrInd(pageList.length - 1);
    } else {
      setCurrInd(currInd - 1);
    }
  };
  const handleRightClick = () => {
    if (currInd === pageList.length - 1) {
      setCurrInd(0);
    } else {
      setCurrInd(currInd + 1);
    }
  };

  return (
    <div className="flex flex-col items-center mt-5 gap-5 bg-[#E0E1DD]">
      <div className="text-3xl under-before relative pb-3 2xl:text-4xl">
        About Me
      </div>

      <School />

      <div
        className="md:w-[1000px] md:h-[600px] bg-[#E0E1DD] flex flex-col items-center gap-10 justify-between mt-10 "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {" "}
        <div className="text-xl font-semibold">{pageTitles[currInd]}</div>
        <div className="flex items-center justify-around mt-3 relative">
          {currInd != 0 && (
            <motion.div
              animate={isHovered ? "set" : "animateL"}
              initial="initial"
              variants={buttonVariants}
              className="absolute md:-left-28 md:top-1/2 -top-0 left-16"
            >
              <ArrowLeftSquare
                className=" w-auto h-10 cursor-pointer transition-all duration-100 hover:scale-110 active:scale-105"
                onClick={handleLeftClick}
              />
            </motion.div>
          )}
          {pageList[currInd]}
          {currInd != pageList.length - 1 && (
            <motion.div
              animate={isHovered ? "set" : "animateR"}
              initial="initial"
              variants={buttonVariants}
              className="absolute md:-right-28 md:top-1/2 -top-0 right-16"
            >
              <ArrowRightSquare
                className=" w-auto h-10 cursor-pointer transition-all duration-100 hover:scale-110 active:scale-105"
                onClick={handleRightClick}
              />
            </motion.div>
          )}
        </div>
        <div className="flex gap-2 items-center pb-5 bg-[#E0E1DD]">
          {pageList.map((elem, index) => {
            return (
              <div
                className={
                  index === currInd
                    ? "rounded-full bg-[#415A77] w-3 h-3 scale-110 transition-all duration-200"
                    : "rounded-full bg-[#778DA9] w-3 h-3 transition-all duration-200"
                }
                key={index}
              ></div>
            );
          })}
        </div>{" "}
      </div>
    </div>
  );
};
