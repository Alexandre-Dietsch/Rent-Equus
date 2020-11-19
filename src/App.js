import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/app.css'
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Library from './components/Library.js';
import Profile from './components/Profile.js';
import Footer from './components/Footer.js';
import HorsesLibrary from "./HorsesLibrary";


export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
            <HorsesLibrary />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/horse-library" component={Library} />
            <Route path="/horse-profile" component={Profile} />
          </Switch>
          <Footer />
        </div>
      </Router>
     </div>
  );
}

