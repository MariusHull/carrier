import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <nav class="navbar fixed-top navbar-expand-lg navbar-expand-md navbar-light bg-light">
          <Link class="navbar-brand" to="/">
            <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
            Carrier
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/services">Services</Link>
              </li>
            </ul>
            {!localStorage.getItem('jwtToken') &&
              <div>
                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
              </div>
            }
          </div>
      </nav>
    );
  }
}

export default Navbar;