import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/customNavbar';

class App extends Component {
  render() {
    return (
   <Router>
     <div>
       <Navbar />
     </div>
   </Router>
    );
  }
}

export default App;
