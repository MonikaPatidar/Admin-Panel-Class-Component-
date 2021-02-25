import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RegisterUser} from '../Services/Register'

export class Registration extends Component{
  constructor(props) {
    console.log(" form constructor")
    super(props);
    this.state={
      phone:'',
      password:'',
      countryCode:+91,
      errors:{},
      
    }
  }

  handleValidation(){
   
    let {phone, password,countryCode} = this.state;
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
           //Phone Validation Ends
  
          this.setState({errors: errors});
          if(formIsValid===true)
          {var body = JSON.stringify({
            phone,
            password,
            countryCode
          })
          }
            this.props.RegisterUser(body)       
  }

  render(){
   
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
          <h3 class="ui center aligned header">Registration Form</h3>
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
          <button type="submit" class="ui primary button" onClick={(e)=>this.handleValidation(e)}>Submit</button>
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

const mapStateToProps = state => {
  console.log(333,state)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    RegisterUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

