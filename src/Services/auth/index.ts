import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../base";



const authApi = API.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: ({username, password}) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          "username": username, 
          "password": password
        },
      }),
    }),
    registerUser: build.mutation({
      query: ({email, username, password}) => ({
        url: `users`,
        method: 'POST',
        body: {
         ' email': email, 
          'username': username, 
          'password': password
        },
      }),
    }),
  }),
  overrideExisting: true,
});


export const { useLoginUserMutation, useRegisterUserMutation} = authApi;
