import React from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import UpdateCars from "./components/dashboard-work/forms/update/update-car";
import UpdateTo from "./components/dashboard-work/forms/update/update-to";
import UpdateComplaints from "./components/dashboard-work/forms/update/update-complaints";

import Login from "./components/dashboard-welcome/login";
import DashboardHome from "./components/dashboard-welcome/dashboard-home";

import Profile from "./components/dashboard-work/profile";
import DashboardWork from "./components/dashboard-work/main";


export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/updatecar/:id'>
            <UpdateCars />
          </Route>
          <Route path='/updateto/:id'>
            <UpdateTo />
          </Route>
          <Route path='/updatecomplaints/:id'>
            <UpdateComplaints />
          </Route>
          <Route path='/dash'>
            <DashboardWork /> {/* 3 */}
          </Route>
          <Route path='/login'>
            <Login /> {/* 2 */}
          </Route>
          <Route path='/profile'>
            <Profile /> {/* 4 */}
          </Route>
          <Route path='/'>
            <DashboardHome /> {/* 1 */}
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
