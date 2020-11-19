import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/app.css'
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Footer from './components/Footer.js';
import HorsesLibrary from "./components/HorsesLibrary";


export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/horse-library" component={HorsesLibrary} />
            <Route path="/horse-profile/:name" component={Profile} />
          </Switch>
          <Footer />
        </div>
      </Router>
     </div>
  );
}

