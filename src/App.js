import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import Contact from "./components/contact";
import Signin from "./components/signin";
import React, { useState } from "react";
import Womens from './components/womens';
import Mens from './components/mens';
import Kids from './components/kids';
import Jewellary from './components/jewellary';
import Cart from "./components/cart"

function App() {
  return (

  <div className="App">
   
      <Router>
        <Navbar />
        <Route path="/cart" component={Cart} />

        <Switch>

          <Route
            exact path="/"
            component={Home} />
          <Route path="/home" component={Home} />

          <Route
            exact path="/"
            component={About} />
          <Route path="/about" component={About} />


          <Route
            exact path="/"
            component={Products} />

          <Route path="/products" component={Products} />
          <Route path="/mens" component={Mens} />
          <Route path="/womens" component={Womens} />
          <Route path="/kids" component={Kids} />
          <Route path="/jewellary" component={Jewellary} />


          



          <Route
            exact path="/"
            component={Contact} />
          <Route path="/contact" component={Contact} />


          <Route
            exact path="/"
            component={Signin} />
          <Route path="/signin" component={Signin} />

        </Switch>
      </Router>

  </div>
  );
}

export default App;
