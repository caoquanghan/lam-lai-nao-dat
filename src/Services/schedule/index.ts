import { API } from "../base";

export interface Schedule {
  id: number;
  timeOn: string;
  duration: string;
  amount: string;
}


const scheduleApi = API.injectEndpoints({
  endpoints: (build) => ({
    getScheduleList: build.query({
      query: (id) => `schedule/user/${id}`,
    }),
    createSchedule: build.mutation({
      query: ({farmid, modelid, timeOn, duration, amount}) => ({
        url: 'schedule',
        method: 'POST',
        body: { farmid, modelid, timeOn, duration, amount},
      }),
    }),
    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `schedule/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetScheduleListQuery, useCreateScheduleMutation, useDeleteScheduleMutation } = scheduleApi;