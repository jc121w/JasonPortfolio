"use client";
import Contact from "@/components/pages/Contact";
import { Hero } from "@/components/pages/Hero";
import { Projects } from "@/components/pages/Projects";
import { Skills } from "@/components/pages/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
