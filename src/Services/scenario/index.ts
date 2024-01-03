import { API } from "../base";

export interface Scenario {
  modelName: string;
  timeOn: [string];
  duration: [string];
  amount: [string];
}


const scenarioApi = API.injectEndpoints({
  endpoints: (build) => ({
    getScenario: build.query({
      query: (id) => `scenario/farm/${id}`,
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetScenarioQuery } = scenarioApi;