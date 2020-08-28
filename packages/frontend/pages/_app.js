/* eslint-disable react/prop-types */
import React from 'react';

import { ApolloProvider } from '@apollo/client';

import { client } from 'client';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  if (pageProps.APOLLO_STATE) {
    client.cache.restore(pageProps.APOLLO_STATE);
  }

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
