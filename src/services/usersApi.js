import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/users' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '?page=2'
    }),
    getUserById: builder.query({
      query: (id) => `?id=${id}`
    }),
    createUser: builder.query({
      query: () => ''
    })
  })
})

export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserQuery } = usersApi
