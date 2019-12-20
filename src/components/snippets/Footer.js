import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Footer extends Component {

  constructor() {
    super();
    this.state = {
      username: ''
    };
  }


  render() {
    return (
      <nav class="navbar fixed-bottom navbar-light bg-light">
        <a class="navbar-brand" href="#">Fixed bottom</a>
      </nav>
    );
  }
}

export default Footer;