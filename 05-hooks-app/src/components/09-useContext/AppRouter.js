import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/about" component={AboutScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/" component={HomeScreen} />
          <Route component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
};
