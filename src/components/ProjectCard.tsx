import Link from "next/link";
import type { Project } from "../../types";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex flex-col gap-4 border-b-2 border-slate-600 bg-slate-900 bg-opacity-60 hover:bg-opacity-40 p-4 ">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-mono font-semibold">{project.title}</h3>
        <div className="flex gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className=" bg-slate-200 bg-opacity-5 font-mono px-4 rounded-full text-slate-400 ">
              {technology}
            </span>
          ))}
        </div>
      </div>
      <p className="font-mono opacity-70 leading-5">{project.description}</p>
      <div className="flex gap-4">
        <Link href={`${project.repourl}`}>
          <a target="_blank">
            <button className="font-mono bg-slate-500 py-1 px-4 rounded-md bg-opacity-50 hover:shadow-lg ">
              GitHub Repo
            </button>
          </a>
        </Link>
        <Link href={`${project.liveurl}`}>
          <a target="_blank">
            <button className="font-mono bg-slate-500 py-1 px-4 rounded-md bg-opacity-50 hover:shadow-lg ">
              Website
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
