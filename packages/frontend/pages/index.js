import React from 'react';

import { ApolloClient, useQuery, gql } from '@apollo/client';
import { settings } from 'client';

const ARTICLES = gql`
  query {
    blogPosts {
      id
      Title
      Content
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(ARTICLES);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  const { blogPosts } = data;

  return (
    <div>
      {blogPosts.map(({ id, Title, Content }) => (
        <div key={id}>
          <h1>{Title}</h1>
          <p>{Content}</p>
          <button onClick={() => console.log('CLICK CLICK')}>Button</button>
        </div>
      ))}
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  if (process.env.PREVIEW === 'true') {
    return {
      props: {}
    };
  }

  const client = new ApolloClient(settings);

  await client.query({
    query: ARTICLES
  });

  return {
    props: { APOLLO_STATE: client.cache.extract() } // will be passed to the page component as props
  };
}
