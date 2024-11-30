import type { Project } from "../../types";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {

  return (
    <div
      className="relative flex flex-col gap-4 border-b border-slate-600 bg-zinc-900 hover:bg-zinc-800 p-4 duration-200"
    >
      <div className=" flex flex-col gap-1">
        <h3 className="text-xl font-mono font-semibold">{project.title}</h3>
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className=" bg-slate-200 bg-opacity-5 font-mono px-4 rounded-full text-slate-400 "
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
      <p className="font-mono opacity-70 leading-5">{project.description}</p>
      <div className="flex gap-4">
        <a target="_blank" href={`${project.repourl}`}>
          <button
            disabled={!project.repourl}
            className={`${
              !project.repourl && "cursor-not-allowed opacity-50"
            } font-mono bg-slate-500 py-1 px-4 rounded-md bg-opacity-50 hover:shadow-lg `}
          >
            GitHub Repo
          </button>
        </a>

        <a target="_blank" href={`${project.liveurl}`}>
          <button
            disabled={!project.liveurl}
            className={`${
              !project.liveurl && "cursor-not-allowed opacity-50"
            } font-mono bg-slate-500 py-1 px-4 rounded-md bg-opacity-50 hover:shadow-lg `}
          >
            Website
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
