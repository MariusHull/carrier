import React, { Component } from 'react';

import "./Service.css";

export default class Service extends Component {
  constructor() {
    super();
    this.state = {
      service: {},
    };
  }

  componentDidMount() {

  }

  render() {
    let { service } = this.props;
    return (
        <div className="col-4">
            {service && <div className="card service-card" style={{"width": "18rem"}}>
                <img src={service.imagePath} className="card-img" alt={service.name}/>
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-subtitle mb-2 text-muted">{service.updated_date}</p>
                    <p className="card-text">{service.desc}</p>
                    <a href={service.address} target="blank" className="card-link">Go to service</a>
                </div>
            </div>}
        </div>
    );
  }
}
