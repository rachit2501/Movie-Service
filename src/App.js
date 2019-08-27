import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import {Route  ,Redirect , Switch} from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from "./components/navbar";
import MoviesForm from './components/movieForm';
import LoginForm from './components/loginForm'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
        <Route path = "/login" component={LoginForm} />
        <Route path="/movies/:id" component={MoviesForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" to="/movies" exact></Redirect> 
        <Redirect to="/not-found" ></Redirect>
        </Switch>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
