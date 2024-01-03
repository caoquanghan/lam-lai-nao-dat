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
      query: ({id, fname, lname, email}) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: { 
          'firstName': fname, 
          'lastName': lname,
          'email': email,
        },
      }),
    })
  }),
  overrideExisting: true,
});


export const { useGetUserQuery, useUpdateUserMutation } = userApi;