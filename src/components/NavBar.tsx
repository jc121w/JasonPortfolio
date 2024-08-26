"use client";
import Link from "next/link";
import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import { motion } from "framer-motion";
import Links from "./Links";

export const NavBar = () => {
  const GitHub = "/assets/GitHub.svg";
  const LinkedIn = "/assets/linkedin.svg";
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    close: {
      y: "100%",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 280,
        damping: 50,
      },
    },
    open: {
      opacity: 1,
      y: "56px",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 23,
      },
    },
  };
  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center h-14 border-b w-full select-none px-4 md:px-20 sticky z-[100] backdrop-blur-lg top-0 border-[#1B263B] bg-[rgba(119,141,169,0.1)]">
      <Link
        href="/"
        className=" hover:scale-110 transition-transform duration-200 text-2xl "
      >
        {" "}
        Jason Chen{" "}
      </Link>

      <motion.div
        animate={isOpen ? "open" : "close"}
        className="z-40 justify-center flex flex-col items-center relative sm:hidden"
        initial="close"
      >
        <motion.div
          className="z-30 w-full h-screen fixed bg-[#E0E1DD] top-0 left-0 flex flex-col justify-center items-center"
          variants={variants}
        >
          <Links toggle={toggleBar} />
        </motion.div>
        <HamburgerButton toggle={toggleBar} />
      </motion.div>
      <div className="hidden sm:block md:block">
        <div className="flex justify-around gap-5 select-none">
          <Link
            href="/about"
            className="hover:scale-110 hover:text-[#778DA9] transition-transform duration-200 text-lg"
          >
            {" "}
            About{" "}
          </Link>
          <a
            href="/assets/Resume-1.pdf"
            className="hover:scale-110 hover:text-[#778DA9] transition-transform duration-200 text-lg"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/jchen2002/"
            className="hover:scale-110 hover:text-[#778DA9] transition-transform duration-200 text-lg flex items-start gap-1 "
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/jc121w"
            className="hover:scale-110 hover:text-[#778DA9] transition-transform duration-200 text-lg flex items-start"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHub} alt="GitHub" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
