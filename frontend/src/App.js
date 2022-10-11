import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AddNewMovie from './components/AddNewMovie';
import Footer from './components/Footer';
import Header from './components/Header';
import Movie from './components/Movie/Movies';
import SearchContextProvider from './context/searchContext';

const client = new ApolloClient({
   uri: 'http://localhost:4000/graphql',
   cache: new InMemoryCache(),
});

function App() {
   return (
      <div className="App">
         <ApolloProvider client={client}>
            <SearchContextProvider>
               <Header />
               <Movie />
            </SearchContextProvider>

            <AddNewMovie />

            <Footer />
         </ApolloProvider>
      </div>
   );
}

export default App;
