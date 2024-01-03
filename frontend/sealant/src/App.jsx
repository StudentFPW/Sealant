import React from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Login from "./components/login";
import Profile from "./components/dashboard-work/profile";
import DashboardHome from "./components/dashboard-home";
import DashboardWork from "./components/dashboard-work/main";


export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
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
