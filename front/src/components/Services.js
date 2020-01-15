import React, { Component } from 'react';
import './Login.css';
import guard from "../utilities/AuthGuard";

import Service from "./snippets/Service";

export default class Services extends Component {

  constructor() {
    super();
    this.state = {
      services : [{
        name: "Service 1", 
        updated_date: "01/01/1010",
        address: "https://google.com",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur a nibh ac volutpat. Aliquam mattis ipsum vitae ullamcorper viverra. Proin ut ipsum quis odio.",
        imagePath: "https://static.techspot.com/images2/news/bigimage/2017/11/2017-11-22-image-21.jpg"
      },
      {
        name: "Service 2", 
        updated_date: "02/02/2020",
        address: "https://google.com",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur a nibh ac volutpat. Aliquam mattis ipsum vitae ullamcorper viverra. Proin ut ipsum quis odio.",
        imagePath: "https://static.techspot.com/images2/news/bigimage/2017/11/2017-11-22-image-21.jpg"
      }],
    };
  }

  componentDidMount() {
    guard("/")
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    // axios.get(`${url}/services/`).then((res) => {
    //     this.setState({services: res.data});
    // }).catch((error) => {
    //     if(error && error.response && error.response.status === 401) {
    //       this.props.history.push("/login");
    //     }
    //   });;
  }

  render() {
      let { services } = this.state;
    return (
        <div className="container">
            {services.length > 0 ? (
                <div className="row">
                    {services.concat(services).concat(services).concat(services).concat(services).concat(services).map((service, index) => {
                        return(<Service service={service} key={index}/>)
                    })}
                </div>
            ): (<div>Vous n'avez aucun service enregistré.</div>)}
        </div>
    );
  }
}
