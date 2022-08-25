export type Technology = string;

export type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  repourl: string;
  liveurl: string;
};

export type DataSlug = {
  [key: string]: Project;
};

export type JobDescription = {
  company: string;
  role: string;
  description: string;
  date: string;
  company_link: string;
  company_logo: string;
};

export type Job = {
  [key: string]: JobDescription;
};
