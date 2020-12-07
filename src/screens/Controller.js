import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//Controller class for implementing Routing functionality

class Controller extends Component {

  constructor() {
    super();
    //This is the base url of the API end points
    this.baseUrl = "https://graph.instagram.com/";
  }

  render() {
    return (
      <Router>
        <div className="main-container">
           
        </div>
      </Router>
    )
  }
}

export default Controller;