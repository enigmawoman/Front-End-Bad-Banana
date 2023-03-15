import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./App.css";
import { setContext } from "@apollo/client/link/context";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import SearchMovies from './components/Pages/SearchMovies';
import SavedMovies from './components/Pages/SavedMovies';
//import Login2 from './components/Pages/LoginLogout';
import LoginForm from './components/Pages/LoginForm';


const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
  <ApolloProvider client={client}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchMovies/>} />
      <Route path="/saved" element={<SavedMovies />} />
      <Route path="/login" element={<LoginForm />}/>
    </Routes>
  </BrowserRouter> 
  </ApolloProvider>
)
}

export default App