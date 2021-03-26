import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LogIn from "./LogIn"
import SignUp from "./SignUp"
import Landing from "./Landing"

import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import MarketView from "./components/MarketView";
import StallView from "./components/StallView";
import Booking from "./components/Booking";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MarketOwnerProfile from "./components/MarketOwnerProfile";
import StallOwnerProfile from "./components/StallOwnerProfile";

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
        <Route path="/market/:marketId" exact>
          <MarketView />
        </Route>
        <Route path="/market/:market/:stall" exact>
          <StallView />
        </Route>
        <Route path="/booking" exact>
          <Booking />
        </Route>
        <Route path="/MarketOwner" exact>
          <MarketOwnerProfile />
        </Route>
        <Route path="/ProductOwner" exact>
          <StallOwnerProfile />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
