import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./common-components/Nav/NavBar";
import Home from "./pages/Home/Home";
import SignIn from "./common-components/SignIn/SignIn";
import ProductDetail from "./pages/product-detail/product-detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/Product-detail/:id/:name" component={ProductDetail} />
        {/* <Home></Home>
        <SignIn></SignIn> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
