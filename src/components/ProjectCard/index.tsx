// src/components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  sourceUrl: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  liveUrl,
  sourceUrl,
}: ProjectCardProps) {
  return (
    <div className="w-full md:w-96 bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex space-x-4">
          <Link
            href={liveUrl}
            target="_blank"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Visit
          </Link>
          <Link
            href={sourceUrl}
            target="_blank"
            className="bg-gray-200 text-black px-4 py-2 rounded-full hover:bg-gray-300 transition-colors"
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
}
