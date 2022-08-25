import Link from "next/link";
import Image from "next/image";
import { JobDescription } from "../../types";

type Props = {
  job: JobDescription;
};

export const ExperienceCard: React.FC<Props> = ({ job }) => {
  return (
    <Link href={job.company_link} className="bg-transparent">
      <a target="_blank" className="rounded-lg flex transition-shadow hover:shadow-zinc-800 hover:shadow-xl">
        <div className="w-76 space-y-5 border p-6 rounded-lg flex flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <h3 className="px-2 text-2xl mb-2 font-thin opacity-70">
                {job.company}
              </h3>
              <span className=" bg-zinc-200 bg-opacity-5 font-mono px-4 rounded-full text-zinc-400 ">
                {job.role}
              </span>
            </div>
            <div className="my-auto cursor-pointer">
              <Image src={job.company_logo} width={40} height={40} />
            </div>
          </div>
          <p className="px-2 pb-4 text-base opacity-70">{job.description}</p>
          <span className="w-fit bg-gray-200 bg-opacity-30 font-mono px-4 rounded-full text-gray-400 ">
            {job.date}
          </span>
        </div>
      </a>
    </Link>
  );
};
