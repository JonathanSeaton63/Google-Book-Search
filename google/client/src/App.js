import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Search from './components/Search/Search';
import CustomNavbar from './components/Nav/CustomNavbar';
import BookSearch from './components/BookSearch/BookSearch'


class App extends Component {
  render() {
    return (
   <Router>
     <div>
     <CustomNavbar />
       <Route exact path="/" component={Search} /> 
      <BookSearch />
     </div>
   </Router>
    );
  }
}

export default App;
