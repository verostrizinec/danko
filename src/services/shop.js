import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from '../firebase/database'

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "/categories.json"
        }),
        getProducts: builder.query({
            query: (category) => `/products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const data = Object.values(response);
                return data;
            }
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}.json`
        }),
        getOrdersByUser: builder.query({
            query: (userId) => `/orders/${userId}.json`,
            transformResponse: (response) => {
                const data = Object.entries(response).map(item => ({ id: item[0], ...item[1] }));
                return data;
            }
        }),
        postOrder: builder.mutation({
            query: ({ userId, order }) => ({
                url: `/orders/${userId}.json`,
                method: "POST",
                body: order
            })
        }),
        patchImageProfile: builder.mutation({
            query: ({ image, localId }) => ({
                url: `user/${localId}.json`,
                method: "PATCH",
                body: { image }
            })
        }),
        getUserProfile: builder.query({
            query: (localId) => `/user/${localId}.json`
        }),
        deleteOrder: builder.mutation({
            query: ({ userId, orderId }) => ({
                url: `orders/${userId}/${orderId}.json`, 
                method: 'DELETE',
            })
        }),
    })
});

export const {  
    useGetCategoriesQuery, 
    useGetProductsQuery, 
    useGetProductQuery,
    usePostOrderMutation,
    useGetOrdersByUserQuery,
    usePatchImageProfileMutation,
    useGetUserProfileQuery,
    useDeleteOrderMutation
} = shopApi;
