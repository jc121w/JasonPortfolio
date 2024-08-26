import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../Skill";
export const Skills = () => {
  const Flutter = "/assets/flutter.svg";
  const Java = "/assets/Java.png";
  const Prisma = "/assets/Prisma.svg";
  const skillsList = [
    ["Java", Java],

    [
      "C",
      "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    ],
    [
      "Python",
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    ],
    [
      "Next.js",
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    ],
    ["Prisma", Prisma],
    [
      "TypeScript",
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    ],
    [
      "Tailwind",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    ],

    [
      "NodeJS",
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    ],
    [
      "JavaScript",
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    ],
    [
      "SQL",
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    ],
    ["Flutter", Flutter],

    ["PHP", "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"],
    [
      "HTML",
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    ],
    [
      "Ruby",
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
    ],
    [
      "MongoDB",
      "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    ],
    [
      "OCaml",
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg",
    ],
  ];

  const variant1 = {
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
    initial: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const skillVariants = {
    animate: { x: 0, opacity: 1 },
    initial: { x: 100, opacity: 0 },
  };

  return (
    <motion.div className="p-10 ">
      <div className="flex flex-col justify-start items-center">
        <h3 className="text-3xl under-before relative pb-3 2xl:text-4xl">
          {" "}
          My Skills{" "}
        </h3>{" "}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mt-8"
          variants={variant1}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
        >
          {skillsList.map((elem, ind) => {
            return (
              <Skill
                variants={skillVariants}
                src={elem[1]}
                name={elem[0]}
                key={ind}
              />
            );
          })}{" "}
        </motion.div>
      </div>
    </motion.div>
  );
};
