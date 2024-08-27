import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Project from "../Project";

export const Projects = () => {
  const Flutter = "/assets/flutter.svg";
  const Next = "/assets/Nextjs.svg";
  const Prisma = "/assets/Prisma.svg";
  const Rest = "/assets/rest.png";
  const slideControls = useAnimationControls();
  const [index, setIndex] = useState(0);
  const GitHub = "/assets/GitHub.svg";
  const YouTube = "/assets/YouTube.svg";
  const Link = "/assets/Link.svg";
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
      desc="MyCookBook is a recipe finder / meal plan designer full stack application. It's target audience is beginner cooks and college students who don't have much time or money. This app aims to help its users learn recipes and build a meal plan that fit their fitness, nutrient, and lifestyle needs. It does so seamlessly with its aesthetic and minimalistic design. Users can search recipes, add and delete recipes from their library, and organize recipes by price and nutrition. This project is still in its early stages with updates being actively made."
      links={[
        { link: ["https://youtube.com", "Demo"], icon: YouTube },
        {
          link: ["https://github.com/jc121w/MyCookBook", "Github"],
          icon: GitHub,
        },
        {
          link: ["https://my-cook-book-three.vercel.app/", "Link"],
          icon: Link,
        },
      ]}
    />,
    <Project
      key="1"
      name="BookWorm"
      skills={[{ src: Flutter, name: "Flutter" }]}
      src={Flutter}
      desc="BookWorm is a book organizer app I collaborated with 3 group members to create. Users can use it to record and organize their thoughts on books they've read or are reading. Taking
    notes, searching unknown words, and adding books to a personalized
    library are among the many functionalities BookWorm has to offer."
      links={[
        { link: ["https://youtu.be/HBdVtfTkBEk", "Demo"], icon: YouTube },
        {
          link: ["https://github.com/jc121w/BookWorm", "Github"],
          icon: GitHub,
        },
      ]}
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
      desc="AdoptAFriend is an app where you can adopt, view, and surrender pets. All the information is stored in a MongoDB collection and interacted with using JS."
      links={[
        { link: ["https://youtu.be/bqiwh_r4aCc", "Demo"], icon: YouTube },
        {
          link: ["https://github.com/jc121w/Animal-Shelter-Node-App", "Github"],
          icon: GitHub,
        },
      ]}
    />,
  ];

  return (
    <div className="flex flex-col items-center mt-5 gap-8 mb-20">
      <div className="text-3xl under-before relative pb-3 2xl:text-4xl">
        Projects
      </div>

      {projectList.map((_elem, index) => {
        return projectList[index];
      })}
    </div>
  );
};
