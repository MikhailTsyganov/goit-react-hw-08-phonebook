import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['phonebook'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['phonebook'],
    }),

    createEntry: builder.mutation({
      query: newEntry => ({
        url: `/contacts`,
        method: 'POST',
        body: newEntry,
      }),
      invalidatesTags: ['phonebook'],
    }),

    deleteEntry: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['phonebook'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateEntryMutation,
  useDeleteEntryMutation,
} = contactsApi;
