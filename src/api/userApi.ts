import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<any[], void>({
      query: () => ({
        url: "/users",
        method: "get",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = userApi;
