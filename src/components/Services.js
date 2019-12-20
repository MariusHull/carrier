import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';
import url from '../config';
import guard from "../utilities/AuthGuard";

import Service from "./snippets/Service";

export default class Services extends Component {

  constructor() {
    super();
    this.state = {
      services : [],
    };
  }

  componentDidMount() {
    guard("/")
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get(`${url}/services/`).then((res) => {
        this.setState({services: res.data});
    }).catch((error) => {
        if(error && error.response && error.response.status === 401) {
          this.props.history.push("/login");
        }
      });;
  }

  render() {
      let { services } = this.state;
    return (
        <div className="container">
            {services.length > 0 ? (
                <div>
                    {services.map((service, index) => {
                        return(<Service service={service} key={index}/>)
                    })}
                </div>
            ): (<div>Vous n'avez aucun service enregistré.</div>)}
        </div>
    );
  }
}
