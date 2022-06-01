import type { DataSlug } from "../../types";

export const useGetItems = (data: DataSlug) => {
  return [
    ...Object.entries(data).map(([id, key]) => {
      return {
        id,
        ...key,
      };
    }),
  ];
};
