import { API } from "../base";

export interface Model {
  id: string;
  name: string;
  source: string;
  desc: string;
}


const modelApi = API.injectEndpoints({
  endpoints: (build) => ({
    getModel: build.query({
      query: () => `models`,
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetModelQuery } = modelApi;