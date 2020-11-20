import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/app.css'
import Navbar from './components/header/Navbar.jsx';
import Home from './components/main/Home';
import HorseItem from './components/main/HorseItem.jsx';
import Footer from './components/footer/Footer';
import HorsesLibrary from "./components/main/HorsesLibrary";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/horse-library" component={HorsesLibrary} />
            <Route path="/horse-profile/:index" component={HorseItem} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

