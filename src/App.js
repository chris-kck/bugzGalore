import React from "react";
import logo from "./logo.svg";
import "./App.css";

import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import Landing from "./components/Landing"
import Footer from "./components/Footer"
import MarketView from "./components/MarketView"
import StallView from "./components/StallView";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div>
    
    <StallView/>
    
    </div>
  );
}

export default App;
