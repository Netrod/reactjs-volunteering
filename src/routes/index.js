import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import Route from "./Route";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Rank from "../pages/Rank";
import Projects from "../pages/Projects";
import Config from "../pages/Config";
import ProjectNew from "../pages/ProjectNew";
import ProjectApprove from "../pages/ProjectApprove";
import Logout from "../pages/Logout";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/login" exact component={Login} isPublic></Route>
        <Route path="/signup" exact component={SignUp} isPublic></Route>
        <Route path="/rank" exact component={Rank}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/projects/new" exact component={ProjectNew}></Route>
        <Route
          path="/projects/approve"
          exact
          component={ProjectApprove}
        ></Route>
        <Route path="/config" exact component={Config}></Route>
        <Route path="/logout" exact component={Logout} isPublic> </Route>
      </Switch>
    </BrowserRouter>
  );
};
