import React from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Login from "./components/login";
import Profile from "./components/profile";


export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/dash'>
            <h1>Dashboard</h1>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/'>
            <h1>Home</h1>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
