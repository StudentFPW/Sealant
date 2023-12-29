import React from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Login from "./components/login";
import Profile from "./components/profile";
import Dashboard from "./components/dashboard";
import Home from "./components/home";


export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/dash'>
            <Dashboard />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
