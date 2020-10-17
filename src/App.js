import React from 'react';
import './App.css';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import SinglePage from './Pages/SinglePage';
import ErrorPage from './Pages/ErrorPage';
import Vehicles from './Pages/Vehicles'
import Reservation from './Pages/Resevation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/Vehicles">
            <Vehicles/>
          </Route>
          <Route exact path="/SinglePage/:id" component={SinglePage}/>
          <Route exact path="/Reservation/:id" component={Reservation}/>
          
          <Route exact path="/ErrorPage">
            <ErrorPage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
