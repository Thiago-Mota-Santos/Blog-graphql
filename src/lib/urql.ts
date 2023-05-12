import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide});

const client = createClient({
    url:"https://api-sa-east-1.hygraph.com/v2/cl6dul0jl0vek01tab7g97tr5/master",
    exchanges:[dedupExchange, cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache };
