/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { Product } from './../../interfaces/index'
// const initialState: Product = {
//   data: [],
//   error: null,
//   isLoading: false,
// }

export const productsApi = createApi({
  reducerPath: 'productsAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://munchies-api.up.railway.app',
  }),

  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
    }),
  }),
})
export const { useGetAllProductsQuery } = productsApi
