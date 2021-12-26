import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Sprite } from '../models/Sprite';

export const spriteApi = createApi({
  reducerPath: 'spriteApi',
  baseQuery: fetchBaseQuery({ baseUrl: '.' }),
  endpoints: (builder) => ({
    getSpriteByName: builder.query<Sprite, string>({
      query: (name) => `sprite/${name}`,
    }),
  }),
});

export const { useGetSpriteByNameQuery } = spriteApi;
