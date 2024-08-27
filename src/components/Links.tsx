import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const variants = {
  open: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  close: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const linkVariants = {
  open: { x: 0, opacity: 1 },
  close: { x: -50, opacity: 0 },
};

const Links = () => {
  const GitHub = "/assets/GitHub.svg";
  const LinkedIn = "/assets/linkedin.svg";

  return (
    <motion.div
      variants={variants}
      transition={{ duration: 3, ease: "linear" }}
      className="flex flex-col justify-around gap-16 select-none"
    >
      <motion.a
        href="/assets/Resume.pdf"
        className="text-3xl"
        target="_blank"
        rel="noreferrer"
        variants={linkVariants}
        whileHover={{ scale: 1.1, color: "#778DA9" }}
        whileTap={{ scale: 0.97 }}
      >
        Resume
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/jchen2002/"
        className="text-3xl flex items-start gap-1 "
        target="_blank"
        rel="noreferrer"
        variants={linkVariants}
        whileHover={{
          scale: 1.1,
          color: "#778DA9",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.97 }}
      >
        <img src={LinkedIn} alt="LinkedIn" className="w-auto h-10" />
        <span>LinkedIn</span>
      </motion.a>
      <motion.a
        href="https://github.com/jc121w"
        className="text-3xl flex items-start"
        target="_blank"
        rel="noreferrer"
        variants={linkVariants}
        whileHover={{ scale: 1.1, color: "#778DA9" }}
        whileTap={{ scale: 0.97 }}
      >
        <img src={GitHub} alt="GitHub" className="w-auto h-10" />
        <span>GitHub</span>
      </motion.a>
    </motion.div>
  );
};

export default Links;
