import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../base";

export interface User {
  id: number;
  email: string;
  name: string;
}

const userApi = API.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) =>  `users/${id}`,
    }),
    updateUser: build.mutation({
      query: ({id, firstName, lastName, email}) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: {firstName, lastName, email},
      }),
    })
  }),
  overrideExisting: true,
});


export const { useLazyGetUserQuery, useUpdateUserMutation } = userApi;