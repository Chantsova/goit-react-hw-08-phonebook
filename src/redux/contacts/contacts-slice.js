import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

//I got this solution from redux-toolkit documentation example "Customizing queries with baseQuery​"
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contact'],
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,

  endpoints(build) {
    return {
      fetchContacts: build.query({
        query: () => ({
          url: '/contacts',
          method: 'GET',
        }),
        providesTags: ['Contact'],
      }),

      addContact: build.mutation({
        query: newContact => ({
          url: '/contacts',
          method: 'POST',
          data: newContact,
        }),
        invalidatesTags: ['Contact'],
      }),

      deleteContact: build.mutation({
        query: contactID => ({
          url: `/contacts/${contactID}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Contact'],
      }),
    };
  },
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useChangeContactMutation,
} = phonebookApi;
