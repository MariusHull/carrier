import React, { Component } from 'react';
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
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <Link className="navbar-brand" to="/home">Fixed bottom</Link>
      </nav>
    );
  }
}

export default Footer;