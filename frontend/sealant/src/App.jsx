import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Login from "./components/login";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/profile/'>
            <h1>Profile</h1>
          </Route>
          <Route path='/dash/'>
            <h1>Dashboard</h1>
          </Route>
          <Route path='/login/'>
            <Login />
          </Route>
          <Route path='/'>
            <h1>Home</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
