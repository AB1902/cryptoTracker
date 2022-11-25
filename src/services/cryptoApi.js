import {fetchBaseQuery}  from '@reduxjs/toolkit/query/react'
import { createApi } from '@reduxjs/toolkit/query/react'

    const cryptoApiHeaders=  {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '1fc64856a2msh52e9c70a0aad17dp1e13dejsn1c369c13bdd6'
    }

     const baseUrl='https://coinranking1.p.rapidapi.com'

     const createRequest=(url) => ({url,headers:cryptoApiHeaders})

     export const cryptoApi=createApi({
        reducerPath:'cryptoApi',
        baseQuery:fetchBaseQuery({baseUrl}),
        endpoints:(builder) => ({
            getCryptos:builder.query({
                query:() => createRequest(`/coins`)
            }),
            getCryptoDetails:builder.query({
                query:(coinId) =>createRequest(`coin/${coinId}`) 
            })
        })
     })

     export const{
        useGetCryptosQuery,useGetCryptoDetailsQuery
     }=cryptoApi
    