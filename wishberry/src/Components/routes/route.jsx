import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../pages/navbar";
import Success from "../pages/Successpage/Success";
import Working from "../pages/work";
import Home from "../pages/Homepage/Home";

import Submit from "../pages/Submitprojects/Submit";
import Current from "../pages/Current/current"
import Dashboard from "../pages/Dashboard/Dashboard"
const Routing = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/how-it-works" render={() => <Working />} />
        <Route path="/submit-projects" render={() =>  <Submit />}/>
        <Route path="/current-projects" render={() =>  <Current />}/>
        
        <Route exact path="/sucessful-projects" render={() =>  <Success />}/>
        <Route path="/dashboard" render={()=> <Dashboard/>}  />
      </Switch>
    </div>
  );
};
export default Routing;
