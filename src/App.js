import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import RegisterForm from './components/auth/RegisterForm';
import SignInForm from './components/auth/SignInForm';
import Home from './components/container/Home';
import Header from './components/container/Header';
import firebase from './utilities/firebase';
class App extends React.Component {

  render() {
    
    return (
      <Router>
        <Header></Header>
        <Route
          path="/register"
          component={RegisterForm}
        />
        <Route
          path="/login"
          component={SignInForm}
        />        

        <Route
          path="/"
          exact
          component={Home}
        />
      </Router>
    );
  }
}


export default App