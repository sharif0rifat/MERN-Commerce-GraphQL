import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Router, Route } from "react-router-dom";

import "./App.css";
// import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./components/Nav/NavBar";
import Collection from "./components/collection/collection";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        {/* <Home></Home>
        <SignIn></SignIn> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
