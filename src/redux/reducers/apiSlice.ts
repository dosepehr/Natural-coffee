import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductType } from "../types";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], any>({
      query: () => "/products",
    }),
    getProduct: builder.query<ProductType, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = apiSlice;
