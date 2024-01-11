import React from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import CreateTo from "./components/dashboard-work/forms/create/create-to";
import CreateComplain from "./components/dashboard-work/forms/create/create-complain";
import CreateCar from "./components/dashboard-work/forms/create/create-car";

import GetCar from "./components/dashboard-work/forms/get/main/get-car";

import DriveAxleModel from "./components/dashboard-work/forms/get/models/get-drive-axle-model";
import EngineModel from "./components/dashboard-work/forms/get/models/get-engine-model";
import SteeringAxleModel from "./components/dashboard-work/forms/get/models/get-steering-axle-model";
import TransmissionModel from "./components/dashboard-work/forms/get/models/get-transmission-model";
import VehicleModel from "./components/dashboard-work/forms/get/models/get-vehicle-model";

import UpdateCars from "./components/dashboard-work/forms/update/update-car";
import UpdateTo from "./components/dashboard-work/forms/update/update-to";
import UpdateComplaints from "./components/dashboard-work/forms/update/update-complain";

import Profile from "./components/dashboard-work/profile";
import DashboardHome from "./components/dashboard-welcome/dashboard-home";
import Login from "./components/dashboard-welcome/login";
import DashboardWork from "./components/dashboard-work/main";


export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/createto'>
            <CreateTo />
          </Route>
          <Route path='/createcomplain'>
            <CreateComplain />
          </Route>
          <Route path='/createcar'>
            <CreateCar />
          </Route>
          <Route path='/getcar/:factory_number'>
            <GetCar />
          </Route>
          <Route path='/driveaxle/:id'>
            <DriveAxleModel />
          </Route>
          <Route path='/engine/:id'>
            <EngineModel />
          </Route>
          <Route path='/steeringaxle/:id'>
            <SteeringAxleModel />
          </Route>
          <Route path='/transmission/:id'>
            <TransmissionModel />
          </Route>
          <Route path='/vehicle/:id'>
            <VehicleModel />
          </Route>
          <Route path='/updatecar/:id'>
            <UpdateCars />
          </Route>
          <Route path='/updateto/:id'>
            <UpdateTo />
          </Route>
          <Route path='/updatecomplaints/:id'>
            <UpdateComplaints />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/dash'>
            <DashboardWork />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <DashboardHome />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
