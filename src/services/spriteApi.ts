import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SpriteSheet } from '../features/sprite/SpriteSheet';
import { Sprite } from '../models/Sprite';

export const spriteApi = createApi({
  reducerPath: 'spriteApi',
  baseQuery: fetchBaseQuery({ baseUrl: '.' }),
  endpoints: (builder) => ({
    getSpriteByName: builder.query<Sprite, string>({
      query: (name) => `api/sprite/${name}`,
    }),
    searchSprites: builder.query<SpriteSheet[], void>({
      query: () => `api/sprite/search`,
    }),
  }),
});

export const { useGetSpriteByNameQuery, useSearchSpritesQuery } = spriteApi;
