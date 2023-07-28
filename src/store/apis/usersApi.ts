import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../user";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https:/jsonplaceholder.typicode.com",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    fetchUsers: builder.query<User[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: (result) => {
        const tags = result
          ? result.map((user) => ({ type: "User" as const }))
          : [];
        tags.push({ type: "User" });
        return tags;
      },
    }),
  }),
});

export const { useFetchUsersQuery } = usersApi;
