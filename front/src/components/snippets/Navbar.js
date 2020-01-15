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
      <nav className="navbar fixed-top navbar-expand-lg navbar-expand-md navbar-light bg-light carrier-navbar">
          <Link className="navbar-brand" to="/">
            <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
            Carrier
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              {!localStorage.getItem('jwtToken') && !localStorage.getItem("Admin") &&
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin</Link>
                </li>
            }
            </ul>
            {!localStorage.getItem('jwtToken') &&
              <div>
                <button className="btn btn-primary" onClick={this.logout}>Logout</button>
              </div>
            }
          </div>
      </nav>
    );
  }
}

export default Navbar;