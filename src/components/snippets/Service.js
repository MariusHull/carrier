import React, { Component } from 'react';

export default class Service extends Component {
  constructor() {
    super();
    this.state = {
      service: {},
    };
  }

  render() {
      let { service } = this.state;
    return (
        <div>
            {service && <div class="card">
                <img src={service.imagePath} class="card-img" alt={service.name}/>
                <div class="card-img-overlay">
                    <h5 class="card-title">{service.name}</h5>
                    <p class="card-text"></p>
                    <p class="card-text">{service.updated_date}</p>
                </div>
            </div>}
        </div>
    );
  }
}
