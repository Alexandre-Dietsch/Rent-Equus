import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/app.css'
import Navbar from './components/header/Navbar.jsx';
import Home from './components/main/Home';
import HorseItem from './components/main/HorseItem.jsx';
import Footer from './components/footer/Footer';
import HorsesLibrary from "./components/main/HorsesLibrary";
import ReservationContainer from './components/reservation/ReservationContainer';
import Music from './components/main/Music';

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Music />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/horse-library" component={HorsesLibrary} />
            <Route path="/horse-profile/:index" component={HorseItem} />
            <Route path='/reservation/:index' component={ReservationContainer} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

