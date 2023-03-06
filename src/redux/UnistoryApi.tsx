import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useState } from "react";
interface All {
  items: ItemsType[];
  meta: MetaType;
}
export type ItemsType = {
  id: number;
  username: string;
  email: string;
  address: string;
};
export type MetaType = {
  currentPage: number;
  perPage: number;
  totalPages: number;
};

export const UnistoryApi = createApi({
  reducerPath: "UnistoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://new-backend.unistory.app/" }),
  endpoints: (build) => ({
    getUnistoryApi: build.query<All, number>({
      query: (limit: number = 0) =>
        `api/data?${limit && `page=${limit}&perPage=20`}`,
    }),
    getOneUnistoryApi: build.query({
      query: (id) => `api/data/id/${id}`,
    }),
  }),
});

export const { useGetUnistoryApiQuery, useGetOneUnistoryApiQuery } =
  UnistoryApi;
