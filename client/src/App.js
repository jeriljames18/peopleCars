import './App.css';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FormCar from './components/forms/FormCar';
import FormPeople from './components/forms/FormPeople';
import CardPerson from './components/cards/CardPerson';
import "antd/dist/reset.css"

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () =>{
  return (
    <ApolloProvider client={apolloClient}>
      <h1 style={{
        textAlign:"center"
      }}>
        PEOPLE AND THEIR CARS
      </h1>
      <Router>
        <Routes>
          <Route path="/" element={
            <div className='App' >
              <div className='forms'>
                <FormPeople />
                <FormCar/>
              </div>
              <div className='cards'>
                <CardPerson/>
              </div>
            </div>
          }>
          </Route>
          
        </Routes>
      </Router>
      
    </ApolloProvider>
  );
}

export default App;
