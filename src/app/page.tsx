// src/app/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4">
        <section className="flex flex-col md:flex-row items-center min-h-screen py-20">
          <div className="flex-1 space-y-4 animate-slide-in">
            <p className="text-xl font-balsamiq">Sooraj Nambiar</p>
            <h1 className="text-4xl font-bold font-alegreya">
              Building Innovative and User-Friendly Websites
            </h1>
            <div className="space-y-2">
              <p>With a strong focus on MERN stack development,</p>
              <p>
                I have successfully built several full-stack projects that are
                both functional and visually appealing.
              </p>
              <p>
                My expertise lies in creating authentic and trustworthy websites
                that provide seamless user experiences.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-slide-in">
            <Image
              src="/image.bmp"
              alt="Sooraj Nambiar"
              width={400}
              height={400}
              className="rounded-3xl"
            />
          </div>
        </section>

        <TechStack />

        <section className="py-20">
          <h2 className="text-3xl text-center font-bold mb-10">My Projects</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <ProjectCard
              title="Wiki-Searcher"
              description="This website utilizes the Wikipedia API to fetch search results based on user queries. It then displays the top 500 results in a clean and organized format, making it easy for users to find relevant information quickly."
              image="/Project1.png"
              liveUrl="https://wiki-search.onrender.com/"
              sourceUrl="https://github.com/Sooraj002/Wiki-search"
            />
            <ProjectCard
              title="Simon Game"
              description="The Simon game is a classic electronic game that tests memory and pattern recognition skills. In this game, players are presented with a sequence of colors that they must replicate by pressing corresponding buttons or keys. The challenge lies in remembering and repeating the increasingly longer sequences correctly."
              image="/Project2.png"
              liveUrl="https://simon-game-azal.onrender.com/"
              sourceUrl="https://github.com/Sooraj002/Simon-game"
            />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
