import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {LoginUser} from '../Services/Login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class UserLogin extends Component{
  constructor(props) {
    console.log(" form constructor")
    super(props);
    this.state={
      flag:false,
      phone:'',
      password:'',
      countryCode:+91,
      timezone:"Asia/Kolkata",
      errors:{},  
    }
  }

    handleValidation(){
      let {phone, password} = this.state;
            let errors = {};
            let formIsValid = true;
  
          //Phone Validation Starts
          if(!(phone.length <= 0)){
            var pattern = new RegExp(/^[0-9/b]+$/);
         
            if (typeof phone !== "undefined") {
              if (!pattern.test(phone)) {
               formIsValid = false;
               errors.phone = "Please enter only number.";
             }
             else if(phone.length !== 10){
               formIsValid = false;
               errors.phone = "Enter 10 igit Number.";
             }
            }
           }
            else{
              formIsValid = false;
              errors.phone = "Cannot be empty";
            }
  
          if(phone & phone.length ===10)
          {
            formIsValid = true;
            errors.phone = " ";
          }
           
          if(!password)
          {
            formIsValid = false;
            errors.password = "Password can not be empty";
          }
          
      if((password.length < 6))
        {
          formIsValid = false;
          errors.password = "At least 8 charatcter long";
        }
  
        if(password & password.length>=6)
        {
          formIsValid = true;
          errors.password = " ";
        }
        this.setState({
          errors:errors
        })

        if(formIsValid===true){
          this.ReqLogin()
        }
    }

  ReqLogin(){
       const {phone,password,countryCode,timezone}=this.state;
       const timez = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log(timez);
          var body = JSON.stringify({
            phone,
            password,
            countryCode,
            timezone
          })
          this.props.LoginUser(body)         
  }
  
  render(){

    if(this.props.flag===true){
      this.props.history.push("/materialdeshbord")
    }

    return (
      
      <div class="ui equal width grid">
        <div class="row">
            <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row">
          <div class="column">
            <div class="">
            </div>
          </div>

          
          <div class="column">
            <div class="ui segment">
          {/* form start */}
          <div>
          <Form>
          <h3 class="ui center aligned header">Login Form</h3>
            <Form.Field required>
              <label>Phone</label>
              <Input placeholder='Phone'
              value={this.state.phone}
              onChange={(e)=>this.setState({phone:e.target.value})}
               />
               <span style={{color: "red"}}>{this.state.errors.phone}</span>      
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <Input 
              type="password"
              placeholder='Password'
              value={this.state.password}
              onChange={(e)=>this.setState({password:e.target.value})}
              required/>
               <span style={{color: "red"}}>{this.state.errors.password}</span>
            </Form.Field>
          <button type="submit" class="ui primary button" onClick={()=>this.handleValidation()}>Submit</button>
          </Form>  
          </div>
        {/* form End */}
            </div> 
          </div>
          <div class="column">
      

            <div class="">
            </div>
          </div>
        </div>
        
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(444,state.Login)
  return {
    flag:state.Login.flag
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    LoginUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);

