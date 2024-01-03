import { API } from "../base";

export interface Location {
  id: number;
  name: string;
}


const locationApi = API.injectEndpoints({
  endpoints: (build) => ({
    getLocation: build.query<Location, string>({
      query: () => `location`,
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetLocationQuery } = locationApi;