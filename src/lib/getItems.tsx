import type { DataSlug, Job } from "../../types";

export const getItems = (data: DataSlug | Job) => {
  return [
    ...Object.entries(data).map(([id, key]) => {
      return {
        id,
        ...key,
      };
    }),
  ];
};
