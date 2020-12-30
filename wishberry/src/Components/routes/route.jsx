import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../pages/navbar";
import Success from "../pages/Successpage/Success";
import Working from "../pages/work";
import Home from "../pages/Homepage/Home";
import Login from "../pages/Loginpage/login"
const Routing = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/how-it-works" render={() => <Working />} />
        <Route exact path="/sucessful-projects" render={() =>  <Success />}/>

      </Switch>
    </div>
  );
};
export default Routing;
