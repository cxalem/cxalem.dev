import type { DataSlug, Job } from "../../types";

export const useGetItems = (data: DataSlug | Job) => {
  return [
    ...Object.entries(data).map(([id, key]) => {
      return {
        id,
        ...key,
      };
    }),
  ];
};
