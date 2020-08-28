import { useMemo } from "react";
import { ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject } from "@apollo/client";

export const settings = {
  ssr: typeof window === "undefined" || process.env.NEXT_PUBLIC_PREVIEW !== 'true',
  link: createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
  }),
  cache: new InMemoryCache(),
};

export const client = new ApolloClient(settings);
