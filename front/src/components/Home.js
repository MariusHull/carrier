import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Accéder à vos services</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Link className="btn btn-primary btn-lg" to="login" role="button">Log In</Link>
                <Link className="btn btn-light btn-lg" to="register" role="button">Sign up !</Link>
                </p>
                </div>
        </div>
    );
  }
}
