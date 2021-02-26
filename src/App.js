import React from 'react'
import './App.css';
import './assets/scss/material-dashboard.scss'
import './assets/css/material-dashboard-rtl.css'
import './assets/css/material-dashboard.css'
import './assets/css/material-dashboard.min.css'
import './assets/css/material-dashboard.css.map'
import UserDeshboard from './Component/DeshBoard';
import UserLogin from './Component/Login'
import RegisterUser from './Component/Registration'
import Category from  './Component/Category'
import Materialdashbord from './Component/MaterialDashbord';
import CategryTable from './Component/Table'
import MainFrame from './Component/MainFrame'
import UserProfile from './Component/UserProfile'
import Notification from './Component/Notification'
import Map from './Component/Map'
import Form from './Component/MaterialForm'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  debugger
  return (
      <div className="App">
        <Router>
       
          <Switch>
            <Route exact path="/form" component={Form}/>
            <Route exact path="/" component={RegisterUser}/>
            <Route exact path="/user/login" component={UserLogin}/>
          <MainFrame>
            <Route exact path="/user/deshboard" component={UserDeshboard}/>
            <Route exact path="/categories" component={Category}/>
            <Route exact path="/materialdeshbord" component={Materialdashbord}/>
            <Route exact path="/table" component={CategryTable}/>
            <Route exact path="/user/profile" component={UserProfile}/>
            <Route exact path="/notification" component={Notification}/>
            <Route exact path="/map" component={Map}/>
          </MainFrame>
            {/* <Route exact path="/mainframe" component={MainFrame}/> */}
          </Switch>
        
        </Router>
      </div>
    
  );
}

export default App;
