import React, { Component } from 'react';

import guard from "../utilities/AuthGuard";

export default class ServiceDetail extends Component {

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
    let id = this.props.match.params.id
    let service = {name: `Service ${id}`}
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
