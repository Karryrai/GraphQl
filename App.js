import React from "react";
import './Styles/App.css';
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
import GetUser from "./Components/GetUser";
//import Queries from "./GraphQl/Queries";
import Footer from "./Components/Footer/Footer";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.graphql.jobs/"
});

function App(){
  return(
          <ApolloProvider client={client}>
          {" "}
          <Navbar/>
          <Form/>
         <GetUser/>
          
          
          <Footer/>
          </ApolloProvider>
  );
            }

export default App;
