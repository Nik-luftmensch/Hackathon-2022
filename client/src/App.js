import { ApolloClient, InMemoryCache } from '@apollo/client';
import {ApolloProvider} from 'react-apollo';
import Profile from './components/Profile';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";



require('dotenv').config();

const ServerConnectionURL = process.env.REACT_APP_SERVER_URL;

const client = new ApolloClient({
  uri: ServerConnectionURL || 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  const { isLoading, error } = useAuth0();
  return (

    <ApolloProvider client={client}>
      <main className="column">
      <h1>Movie Review System</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )}
    </main>
    </ApolloProvider>
  );
}

export default App;
