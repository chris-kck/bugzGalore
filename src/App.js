import React from "react";
import logo from "./logo.svg";
import "./App.css";

import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import MarketView from "./components/MarketView";
import StallView from "./components/StallView";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route path="/sign-in" exact>
          <LogIn />
        </Route>
        <Route path="/market/:id" exact>
          <MarketView />
        </Route>
        <Route path="/vendor/:id" exact>
          <StallView />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
