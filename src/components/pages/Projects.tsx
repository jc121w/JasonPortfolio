import { useState } from "react";
import RightArrow from "../../../public/assets/right.svg";
import LeftArrow from "../../../public/assets/left.svg";
import { motion, useAnimationControls } from "framer-motion";
import Project from "../Project";

export const Projects = () => {
  const Flutter = "/assets/flutter.svg";
  const Next = "/assets/Nextjs.svg";
  const Prisma = "/assets/Prisma.svg";
  const Rest = "assets/rest.png";
  const slideControls = useAnimationControls();
  const [index, setIndex] = useState(0);

  const projectVariants = {
    initial: { x: 0, opacity: 1 },
    animateL: {
      x: [0, -400, 400, 0],
      opacity: [1, 0, 0, 0, 1],
      transition: { duration: 1.5, times: [0, 0.25, 0.3, 0.5] },
    },
    animateR: {
      x: [0, 400, -400, 0],
      opacity: [1, 0, 0, 0, 1],
      transition: { duration: 1.2, times: [0, 0.25, 0.3, 0.5] },
    },
    exit: { x: 0, opacity: 1 },
  };
  const projectList = [
    <Project
      key="0"
      name="MyCookBook"
      skills={[
        { src: Next, name: "Next.js" },
        { src: Prisma, name: "Prisma" },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
          name: "PostgreSQL",
        },
        { src: Rest, name: "RESTful API" },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
          name: "TypeScript",
        },

        {
          src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          name: "Tailwind",
        },
      ]}
      src={Flutter}
      yt="https://youtube.com"
      git="https://github.com/jc121w/MyCookBook"
      desc="MyCookBook is a recipe finder / meal plan designer full stack application. It's target audience is beginner cooks and college students who don't have much time or money. This app aims to help its users learn recipes and build a meal plan that fit their fitness, nutrient, and lifestyle needs. It does so seamlessly with its aesthetic and minimalistic design. Users can search recipes, add and delete recipes from their library, and organize recipes by price and nutrition. This project is still in its early stages with updates being actively made."
    />,
    <Project
      key="1"
      name="BookWorm"
      skills={[{ src: Flutter, name: "Flutter" }]}
      src={Flutter}
      yt="https://youtu.be/HBdVtfTkBEk"
      git="https://github.com/jc121w/BookWorm"
      desc="BookWorm is a book organizer app I collaborated with 3 group members to create. Users can use it to record and organize their thoughts on books they've read or are reading. Taking
    notes, searching unknown words, and adding books to a personalized
    library are among the many functionalities BookWorm has to offer."
    />,
    <Project
      key="2"
      name="AdoptAFriend"
      skills={[
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
          name: "HTML",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
          name: "CSS",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          name: "JavaScript",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
          name: "NodeJS",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
          name: "MongoDB",
        },
      ]}
      src={Flutter}
      yt="https://youtu.be/bqiwh_r4aCc"
      git="https://github.com/jc121w/Animal-Shelter-Node-App"
      desc="AdoptAFriend is an app where you can adopt, view, and surrender pets. All the information is stored in a MongoDB collection and interacted with using JS."
    />,
  ];

  return (
    <div className="flex flex-col items-center mt-5 gap-8">
      <div className="text-3xl under-before relative pb-3">Projects</div>

      {projectList.map((_elem, index) => {
        return projectList[index];
      })}
    </div>
  );
};
