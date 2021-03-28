import React from "react";
import "./App.css";

import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import MarketView from "./pages/MarketView";
import StallView from "./pages/StallView";
import Booking from "./pages/Booking";
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
          <Booking />
        </Route>
        <Route path="/ProductOwner" exact>
          <Booking />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
