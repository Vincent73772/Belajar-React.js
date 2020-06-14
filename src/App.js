import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
//import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import AboutComp from './Component/Fungsional/AboutComp';
import DetailComp from './Component/Fungsional/DetailComp';
//import logo from './logo.svg';
//import './App.css';
//import Home from './Componen/Fungsional/Home';


const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/detail/:id" component={DetailComp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
