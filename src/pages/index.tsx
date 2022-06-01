import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import { useGetItems } from "../hooks/useGetItems";
import mainData from "../data/ProjectsData.json";
import moreProjectsData from "../data/ProjectsData2.json";

const Home: NextPage = () => {
  const mainProjects = useGetItems(mainData);
  const getMoreProjects = useGetItems(moreProjectsData);
  const [showMoreProjects, setShowMoreProjects] = useState<boolean>(false);

  const btnText = showMoreProjects ? "Show Less" : `Load more projects... (${getMoreProjects.length})`;

  const handleClick = ()=> {
    setShowMoreProjects(!showMoreProjects);
  }

  return (
    <div className="bg-slate-800 text-slate-50 flex min-h-screen flex-col items-center justify-center py-10">
      <Head>
        <title>Alejandro Mena - Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-10 max-w-screen-sm">
        <header>
          <h1 className="text-center md:text-left px-2 text-4xl font-bold mb-5">👋 I'm Alejandro!</h1>
          <p className="text-center md:text-left px-2">
            I'm currently doing frontend, but I really love to create things, so
            my goal is to learn things that help me create other things.
          </p>
        </header>

        <section className="">
          <h2 className="text-center md:text-left text-3xl font-semibold mb-5">
            Projects I've worked on
          </h2>
          {mainProjects.map((project) => (
            <ProjectCard key={project.title} project={{ ...project }} />
          ))}
          {showMoreProjects &&
            getMoreProjects.map((project) => (
              <ProjectCard key={project.title} project={{ ...project }} />
            ))}
          <div className="flex cursor-pointer hover:underline justify-center mt-3 text-blue-500">
            <button onClick={handleClick}>
              {btnText}
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-center px-2 md:text-left text-3xl font-semibold mb-5">About me</h2>
          <p className="text-center px-2 md:text-left">
            {`I'm Venezuelan but currently live in Peru. I am passionate about
            technology and personal growth. I love to sing (I'm not a good
            singer 😅), to write (I think I'm good here but I'm not doing this
            very often lately 😔), to talk with people (trust me, I really love
            to talk 😄), to code (since I started I haven't stoped), all the space
            stuff and learning new things.`}
          </p>
        </section>

        {/* <section>
          <h2 className="text-3xl font-semibold mb-5">Bucket list</h2>
          <ul>
            <li></li>
          </ul>
        </section> */}
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
