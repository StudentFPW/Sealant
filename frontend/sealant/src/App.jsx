import React from "react";

// import secureLocalStorage from "react-secure-storage";
// import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

// import { main } from './components/urls';

import UpdateCars from "./components/dashboard-work/forms/update/update-car";
import UpdateTo from "./components/dashboard-work/forms/update/update-to";
import UpdateComplaints from "./components/dashboard-work/forms/update/update-complain";

import Login from "./components/dashboard-welcome/login";
import DashboardHome from "./components/dashboard-welcome/dashboard-home";

import Profile from "./components/dashboard-work/profile";
import DashboardWork from "./components/dashboard-work/main";


export default function App() {

  // const fetchToken = async () => { // FIXME: this method not good !
  //   await axios.request({
  //     method: "POST",
  //     url: `${main}/api/v1/token/verify/`,
  //     data: { token: secureLocalStorage.getItem('token') },
  //   }).then(() => {
  //   }).catch(() => {
  //     secureLocalStorage.removeItem('token');
  //     secureLocalStorage.removeItem('refreshToken');
  //   });
  // };

  // fetchToken();

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
