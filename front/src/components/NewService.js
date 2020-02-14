import React, { Component } from 'react';

import guard from "../utilities/AuthGuard";

export default class NewService extends Component {

  constructor() {
    super();
    this.state = {
        service: null,
        loaded: false
    };
  }

  componentDidMount() {
    guard("/")
    this.loadService()
  }

  loadService = () => {
      let service = {name: "Service 123"}
      this.setState({service: service, loaded: true})
  }

  render() {
      const { service, loaded } = this.state;
    return (
      <div className="container">
        {loaded && (<h1>Service : {service.name}</h1>)}
      </div>
    );
  }
};
