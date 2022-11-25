import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders= {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '1fc64856a2msh52e9c70a0aad17dp1e13dejsn1c369c13bdd6'
  }

  const baseUrl='https://bing-news-search1.p.rapidapi.com'

  const createRequest=(url)=>({url,headers:cryptoNewsHeaders})

  export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews:builder.query({
            query:({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`)
        })
    })
 })

 export const{
    useGetCryptoNewsQuery
 }=cryptoNewsApi