import { ApolloClient, InMemoryCache } from '@apollo/client';
import {ApolloProvider} from 'react-apollo';
//components
import BookList from './components/BookList'
import AddBook from './components/AddBook'
require('dotenv').config();

const ServerConnectionURL = process.env.REACT_APP_SERVER_URL;

const client = new ApolloClient({
  uri: ServerConnectionURL || 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
     <div id="main">
        <h1> Book List</h1>
          <BookList/>
          <AddBook/>
     </div>
    </ApolloProvider>
  );
}

export default App;
