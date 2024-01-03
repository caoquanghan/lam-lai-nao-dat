import { API } from "../base";


export interface Notification {
  id: number;
  title: string;
  body: string;
  created: string;
}


const notificationApi = API.injectEndpoints({
  endpoints: (build) => ({
    getNotification: build.query({
      query: (id) => `notification/user/${id}`,
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetNotificationQuery } = notificationApi;