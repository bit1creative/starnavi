import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gameModesApi = createApi({
        reducerPath: 'gameModesApi',
        baseQuery: fetchBaseQuery({ baseUrl: "https://demo1030918.mockable.io/" }),
        endpoints: (builder) => ({
            getGameModes: builder.query({query: () => ''}),
    }),
    })

export const { useGetGameModesQuery } = gameModesApi

