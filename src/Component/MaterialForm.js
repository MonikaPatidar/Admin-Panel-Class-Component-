import React, { Component } from 'react'

class Form extends Component{
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
        return(
            <>
    <div class="RegDiv">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header card-header-primary">
                    <h4 class="card-title">Registration Form</h4>
                    </div>
                    <div class="card-body">
                    <form>
                    <div class="row">
                      <div class="col-md-10">
                        <div class="inputdiv">
                          <label class="bmd-label-floating">Phone</label>
                          <input 
                          type="text" 
                          class="form-control"
                          value={this.state.phone}
                          onChange={(e)=>this.setState({phone:e.target.value})}
                          />
                          <span style={{color: "red"}}>{this.state.errors.phone}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-10">
                        <div class="inputdiv">
                          <label class="bmd-label-floating">Password</label>
                          <input 
                          type="password" 
                          class="form-control"
                          type="password"
                          value={this.state.password}
                          onChange={(e)=>this.setState({password:e.target.value})} 
                          />
                          <span style={{color: "red"}}>{this.state.errors.password}</span>
                        </div>
                      </div>
                    </div> 
                    <div class="row">
                        <div class="btndiv">
                            <button type="submit" class="ui purple button"  onClick={(e)=>this.handleValidation(e)}>Submit</button>
                        </div>
                    </div>
                    </form>

                    </div>
                </div>
            </div> 
          </div>
        </div> 
    </div>
            </>
        )
    }
}

export default Form