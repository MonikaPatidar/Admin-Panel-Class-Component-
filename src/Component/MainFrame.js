import React, { Component } from 'react';
import {
    BrowserRouter as Router,

    NavLink
  } from "react-router-dom";

class MainFrame extends Component{
    constructor(props){
        super(props);
        this.state = {
          showMenu: false,
        }
    }

    render(){
      debugger
        return(
            <>
            {/* sideBar Start */}
            <div class="wrapper ">
            <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
            <div class="logo"><a href="http://www.creative-tim.com" class="simple-text logo-normal">
                Creative Tim
                </a></div>
            <div class="sidebar-wrapper">
                <ul class="nav nav-pills">
                <li class="nav-item ">
                    <NavLink className="nav-link" to="/materialdeshbord" activeStyle={{color: "white",backgroundColor: "rgb(92, 30, 128)"}}>
                    DeshBoard
                    <i class="material-icons">dashboard</i>
                    </NavLink>
                </li>
                
                <li class="nav-item">
                     <NavLink className="nav-link" to="/user/profile" activeStyle={{color: "white",backgroundColor: "rgb(92, 30, 128)"}} >
                    User Profile
                    <i class="material-icons">person</i>
                    </NavLink>
                </li>
                <li class="nav-item ">
                     <NavLink className="nav-link" to="/categories" activeStyle={{color: "white",backgroundColor: "rgb(92, 30, 128)"}} >
                     Categories
                    <i class="material-icons">table</i>
                    </NavLink>
                </li>
                <li class="nav-item ">
                     <NavLink className="nav-link" to="/map" activeStyle={{color: "white",backgroundColor: "rgb(92, 30, 128)"}} >
                     Map
                    <i class="material-icons">map</i>
                    </NavLink>
                </li>
                <li class="nav-item ">
                     <NavLink className="nav-link" to="/table" activeStyle={{color: "white",backgroundColor: "rgb(92, 30, 128)"}} >
                     Cart
                    <i class="material-icons">person</i>
                    </NavLink>
                </li>
                <li class="nav-item ">
                     <NavLink className="nav-link" className="nav-link" to="/notification" activeStyle={{color: "white",backgroundColor: "rgb(92, 30, 128)"}} >
                      Notification
                      <i class="material-icons">notifications</i>
                    </NavLink>
                </li>
                <li class="nav-item ">
                    <NavLink className="nav-link" to="/login" activeStyle={{color: "white",backgroundColor: "rgb(92, 30, 128)"}} >
                    SignOut
                    <i class="material-icons">person</i>
                    </NavLink> 
                </li>
                </ul>
            </div>
            </div>
            {/* sidebar End */}

            <div class="main-panel">
            {/*  Start Navbar */}
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="javascript:;">Dashboard</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <form class="navbar-form">
              <div class="input-group no-border">
                <input type="text" class="form-control" placeholder="Search..." />
                <button type="submit" class="btn btn-white btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="javascript:;">
                  <i class="material-icons">dashboard</i>
                  <p class="d-lg-none d-md-block">
                    Stats
                  </p>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">notifications</i>
                  <span class="notification">5</span>
                  <p class="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Mike John responded to your email</a>
                  <a class="dropdown-item" href="#">You have 5 new tasks</a>
                  <a class="dropdown-item" href="#">You're now friend with Andrew</a>
                  <a class="dropdown-item" href="#">Another Notification</a>
                  <a class="dropdown-item" href="#">Another One</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {/* <button class="nav-link" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
                  <i class="material-icons">person</i>
                  <p class="d-lg-none d-md-block">
                    Account
                  </p>
                  {/* </button> */}
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                  <a class="dropdown-item" href="#">Profile</a>
                  <a class="dropdown-item" href="#">Settings</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Log out</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {this.props.children}
      {/* End Navbar */}
    </div>
    </div>
            </>
        )
    }
}
export default MainFrame