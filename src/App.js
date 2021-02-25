import React from 'react'
import './App.css';
import './assets/css/material-dashboard-rtl.css'
import './assets/css/material-dashboard.css'
import './assets/css/material-dashboard.min.css'
import UserDeshboard from './Component/DeshBoard';
import UserLogin from './Component/Login'
import RegisterUser from './Component/Registration'
import Category from  './Component/Category'
import Materialdashbord from './Component/MaterialDashbord';
import CategryTable from './Component/Table'
import MainFrame from './Component/MainFrame'
import UserProfile from './Component/UserProfile'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App(props) {
  debugger
  return (
      <div className="App">
        <Router>
       
          <Switch>
          <MainFrame>
            <Route exact path="/" component={RegisterUser}/>
            <Route exact path="/user/login" component={UserLogin}/>
            <Route exact path="/user/deshboard" component={UserDeshboard}/>
            <Route exact path="/categories" component={Category}/>
            <Route exact path="/materialdeshbord" component={Materialdashbord}/>
            <Route exact path="/table" component={CategryTable}/>
            <Route exact path="/user/profile" component={UserProfile}/>
            </MainFrame>
            {/* <Route exact path="/mainframe" component={MainFrame}/> */}
          </Switch>
        
        </Router>
      </div>
    
  );
}

export default App;
