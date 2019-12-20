import React, { Component } from "react";

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/snippets/Navbar";
import Footer from "./components/snippets/Footer";

import Home from "./components/Home";

import "./App.css";
import Services from "./components/Services";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <div>
        
          <Router>
            <div>
              <Navbar />
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/services' component={Services} />
              <Footer />
            </div>
          </Router>
        
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import url from './config';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       books: []
//     };
//   }

//   componentDidMount() {
//     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
//     axios.get(`${url}/api/book`)
//       .then(res => {
//         this.setState({ books: res.data });
//         console.log(this.state.books);
//       })
//       .catch((error) => {
//         if(!error.response || (error.reponse && error.response.status) === 401) {
//           this.props.history.push("/login");
//         }
//       });
//   }

//   logout = () => {
//     localStorage.removeItem('jwtToken');
//     window.location.reload();
//   }

//   render() {
//     return (
//       <div class="container">
//         <div class="panel panel-default">
//           <div class="panel-heading">
//             <h3 class="panel-title">
//               BOOK CATALOG &nbsp;
//               {localStorage.getItem('jwtToken') &&
//                 <button class="btn btn-primary" onClick={this.logout}>Logout</button>
//               }
//             </h3>
//           </div>
//           <div class="panel-body">
//             <table class="table table-stripe">
//               <thead>
//                 <tr>
//                   <th>ISBN</th>
//                   <th>Title</th>
//                   <th>Author</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.books.map(book =>
//                   <tr>
//                     <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
//                     <td>{book.title}</td>
//                     <td>{book.author}</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;