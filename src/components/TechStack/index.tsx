// src/components/TechStack.tsx
import Image from "next/image";
// import SkillCard from "./SkillCard";
// src/components/SkillCard.tsx
interface SkillCardProps {
  category: string;
  skills: string[];
}

export function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="w-full md:w-64 bg-white shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
      <h3 className="text-xl font-bold mb-4">{category}</h3>
      <hr className="mb-4 border-gray-300" />
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-700">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

const techStackLogos = [
  { id: "mongo", src: "/mongo.png", name: "Mongo DB" },
  { id: "express", src: "/express.png", name: "Express JS" },
  { id: "react", src: "/react.png", name: "React JS" },
  { id: "node", src: "/node.png", name: "Node JS" },
];

const skillCategories = [
  {
    category: "Front-end",
    skills: ["HTML", "CSS", "Javascript", "React JS"],
  },
  {
    category: "Back-end",
    skills: ["Node JS", "Express JS", "Mongo DB", "Passport"],
  },
  {
    category: "Others",
    skills: ["Github", "APIs", "Python", "C"],
  },
];

export default function TechStack() {
  return (
    <section className="py-16">
      <h2 className="text-3xl text-center font-bold mb-12">Skills</h2>
      <p className="text-center mb-12 text-xl">
        Building Modern Web Applications Using Technologies Such As
      </p>

      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {techStackLogos.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center transform hover:scale-110 transition-transform"
          >
            <Image
              src={tech.src}
              alt={tech.name}
              width={90}
              height={90}
              className="mb-4"
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.category}
            category={category.category}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
}
