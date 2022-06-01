export type Technology = string

export type Project = {
    title: string;
    description: string;
    technologies: Technology[];
    repourl: string;
    liveurl: string;
  };
  
  export type DataSlug = {
    [key: string]: Project
  };