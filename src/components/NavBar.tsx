import Link from "next/link";
import React from "react";

export const NavBar = () => {
  const GitHub = "/assets/GitHub.svg";
  const LinkedIn = "/assets/linkedin.svg";
  return (
    <nav className="flex justify-between items-center h-14 border-b w-full select-none px-2.5 md:px-20 sticky z-[100] backdrop-blur-lg top-0 border-[#1B263B] bg-[rgba(119,141,169,0.1)]">
      <Link
        href="/"
        className=" hover:scale-110 transition-transform duration-200 text-2xl "
      >
        {" "}
        Jason Chen{" "}
      </Link>
      <div className="flex justify-around gap-5 select-none">
        <Link
          href="/about"
          className="hover:scale-110 hover:text-[#d90429] transition-transform duration-200 text-lg"
        >
          {" "}
          About{" "}
        </Link>
        <a
          href="/assets/Resume.pdf"
          className="hover:scale-110 hover:text-[#d90429] transition-transform duration-200 text-lg"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>

        <a
          href="https://www.linkedin.com/in/jchen2002/"
          className="hover:scale-110 hover:text-[#d90429] transition-transform duration-200 text-lg flex items-start gap-1 "
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/jc121w"
          className="hover:scale-110 hover:text-[#d90429] transition-transform duration-200 text-lg flex items-start"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHub} alt="GitHub" />
          <span>GitHub</span>
        </a>
      </div>
    </nav>
  );
};
