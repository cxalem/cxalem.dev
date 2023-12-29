import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import { useGetItems } from "../hooks/useGetItems";
import mainData from "../data/ProjectsData.json";
import moreProjectsData from "../data/ProjectsData2.json";
import jobExperiences from "../data/JobExperiences.json";
import { ExperienceCard } from "../components/ExperienceCard";

const Home: NextPage = () => {
  const mainProjects = useGetItems(mainData);
  const getMoreProjects = useGetItems(moreProjectsData);
  const getJobExperiences = useGetItems(jobExperiences);
  const [showMoreProjects, setShowMoreProjects] = useState<boolean>(false);

  const btnText = showMoreProjects
    ? "Show Less"
    : `Load more projects... (${getMoreProjects.length})`;

  const handleClick = () => {
    setShowMoreProjects(!showMoreProjects);
  };

  return (
    <div className="text-slate-50 flex min-h-screen flex-col items-center justify-center py-10">
      <Head>
        <title>Alejandro Mena - Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-10 max-w-screen-sm">
        <header>
          <h1 className="text-center md:text-left text-4xl font-bold mb-5">
            👋 I'm Alejandro!
          </h1>
          <p className="text-center md:text-left">
            I'm a Full Stack Developer currently working as a Software Engineer at{" "}
            <a className="text-green-400" href="https://consensys.io/">
              ConsenSys
            </a>
            ! I'm currently building my{" "}
            <a
              className="text-blue-400"
              href="https://github.com/cxalem/personal-assistant"
            >
              Personal Assistant
            </a>{" "}
            using Next.js and OpenAI. 📍 Based in Lima, Peru.
          </p>
        </header>

        <section className="bg-transparent">
          <h2 className="text-center md:text-left text-3xl font-semibold mb-5">
            💼 Projects I've worked on
          </h2>
          {mainProjects.map((project) => (
            <ProjectCard key={project.title} project={{ ...project }} />
          ))}
          {showMoreProjects &&
            getMoreProjects.map((project) => (
              <ProjectCard key={project.title} project={{ ...project }} />
            ))}
          <div className="flex cursor-pointer hover:underline justify-center mt-3 text-zinc-400">
            <button onClick={handleClick}>{btnText}</button>
          </div>
        </section>

        <section>
          <h2 className="text-center md:text-left text-3xl font-semibold mb-5">
            🙎‍♂️ About me
          </h2>
          <p className="text-center md:text-left">
            {`I'm Venezuelan. I am passionate about technology and personal growth. I love to create, learn and share.`}
          </p>
        </section>

        <section>
          <h2 className="text-center md:text-left text-3xl font-semibold mb-5">
            🎥 Published content
          </h2>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-blue-100">How to use the Infura Gas API</h3>
            <p>In this video, I explain how to create a request to the Infura Gas API to retrieve Gas Fees for various networks.</p>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/74clgGR6rok`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Embedded youtube"
              className="w-full"
            />
          </div>
        </section>

        {/* <section>
          <h2 className="text-3xl font-semibold mb-5">Bucket list</h2>
          <ul>
            <li></li>
          </ul>
        </section> */}

        <section className="mx-auto md:mx-0">
          <h2 className="text-center md:text-left text-3xl font-semibold mb-5">
          👨‍💻 Job Experience
          </h2>
          <div className="flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-5">
            {getJobExperiences.map((job) => (
              <ExperienceCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
