import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./route/Home";
import Add from "./route/add";
import Login from "./route/login";
import Register from "./route/register";
import logo from "./logo.jpeg";
import './App.css';


const AppRouter = () => (
  <Router>
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} alt="" className="logo" style={{width:"50px"}}/>
  <li className="navbar-brand" ><Link to={'/'}> Library</Link></li>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <li className="nav-item nav-link active"><Link to={'/add/'}>Add Book</Link><span className="sr-only">(current)</span></li>

    </div>
   
  </div>
  <div className="box">
    <li className="nav-item nav-link"><Link to={'/login/'}>Login</Link></li>
      <li className="nav-item nav-link" ><Link to={'/register/'}> Rgister</Link></li>
      </div>
</nav> 

      <Route path="/" exact component={Home} />
      <Route path="/add/" component={Add} />
      <Route path="/login/" component={Login} />
      <Route path="/register/" component={Register} />
    </div>
  </Router>
);

export default AppRouter;