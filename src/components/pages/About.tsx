"use client";
import React, { useState } from "react";
import { School } from "../School";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
import { About_Box } from "../AboutBox";
import { CourseBox } from "../CourseBox";

export const About = () => {
  const [currInd, setCurrInd] = useState(0);
  const pageList = [<About_Box />, <CourseBox />];

  const handleRightClick = () => {
    if (currInd < pageList.length - 1) {
      setCurrInd(currInd + 1);
    }
  };
  return (
    <div className="flex flex-col items-center mt-5 gap-5 ">
      <div className="text-3xl under-before relative pb-3 ">About Me</div>

      <School />
      <div className="flex items-center w-full justify-around  mt-5">
        <ArrowLeftSquare className="w-auto h-10" onClick={handleRightClick} />
        {pageList[currInd]}
        <ArrowRightSquare className="w-auto h-10" onClick={handleRightClick} />
      </div>
      <div className="flex gap-2 ">
        {pageList.map((elem, index) => {
          return (
            <div
              className={
                index === currInd
                  ? "rounded-full bg-black w-3 h-3"
                  : "rounded-full bg-gray-500 w-3 h-3"
              }
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
