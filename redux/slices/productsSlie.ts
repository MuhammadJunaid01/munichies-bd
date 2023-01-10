/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://munchies-api.up.railway.app',
  }),

  tagTypes: ['Products', 'order'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
      providesTags: ['Products'],
    }),
    createOrder: builder.mutation({
      query: (data) => {
        return {
          url: '/order',
          body: data,
          method: 'POST',
          headers: { x_access_user: 'hire.developerjunaid@gmail.com' },
        }
      },
    }),
  }),
})
export const { useGetAllProductsQuery, useCreateOrderMutation } = productsApi
