import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Landing from "./Landing";
import Footer from "./Footer";
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
          {/* <Market /> */}
        </Route>
        <Route path="/vendor/:id" exact>
          {/* <Vendor /> */}
        </Route>

        <Footer />
      </Switch>
    </Router>
  );
}

export default App;
