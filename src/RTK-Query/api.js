import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/"
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users"
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "users",
        method: "GET",
        body: newUser
      })
    })
  })
});

export const {
  useGetUsersQuery,
  useAddUserMutation
} = api;