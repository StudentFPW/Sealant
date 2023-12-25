import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Login from "./components/login";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/login/'>
            <Login />
          </Route>
          <Route path='/'>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
