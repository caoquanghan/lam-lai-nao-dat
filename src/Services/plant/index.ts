import { API } from "../base";

export interface Plant {
  id: number;
  name: string;
}


const plantApi = API.injectEndpoints({
  endpoints: (build) => ({
    getPlant: build.query({
      query: () => `cultivars`,
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetPlantQuery } = plantApi;