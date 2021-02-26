import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GetCategory } from '../Services/Category'
import { Table } from 'semantic-ui-react'
import { Dimmer, Loader } from 'semantic-ui-react'

class Category extends Component{

  constructor(props) {
    console.log(" form constructor")
    super(props);
    this.state={
      category:'',
      loading:false,
    }
  }

  componentDidMount(){
    this.props.GetCategory()
  }


  static getDerivedStateFromProps(nextProps){
    return{
      category:nextProps.category,
      loading:nextProps.loading
    }
  }

  handleSearch(e){
    e.preventDefault();
    const searchItem=e.target.value;
    console.log(searchItem);
  }
  
    
  render(){
    debugger
    return(
    <>
    {!this.state.loading ? 
    <div style={{margin:"6%"}}>
    <div class="content">
    <div class="container-fluid">
    <div class="row"></div>


    <form class="navbar-form">
              <div class="input-group no-border">
                <input type="text" class="form-control" placeholder="Search..." onChange={(e)=>this.handleSearch(e)}/>
                <button type="submit" class="btn btn-white btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <div class="ripple-container"></div>
                </button>
              </div>
    </form>


        <div class="col-md-12">
              <div class="card card-plain">
                <div class="card-header card-header-primary">
                  
                  <h4 class="card-title " style={{fontFamily:"Open Sans", fontSize:"170%", margin:"1%"}}> Category</h4>
                  {/* <p class="card-category"> Here is a subtitle for this table</p> */}
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                
                    <table class="table table-hover" style={{fontFamily:"Open Sans", fontSize:"120%"}}>
                      <thead class=""style={{margin:"1%"}} >
                        <th style={{fontFamily:"Open Sans", fontSize:"120%", fontWeight:"bold"}}>
                        Serial
                        </th>
                        <th style={{fontFamily:"Open Sans", fontSize:"120%", fontWeight:"bold"}}>
                          Name
                        </th>
                        <th style={{fontFamily:"Open Sans", fontSize:"120%", fontWeight:"bold"}}>
                        Description
                        </th>
                        <th style={{fontFamily:"Open Sans", fontSize:"120%", fontWeight:"bold"}}>
                        Active
                        </th>
                      </thead>
                      
                      <tbody>
           {this.state.category ? this.state.category.map((category,index) => {  
           return(<>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                          {index+1}
                          </td>
                          <td>
                          {category.name}
                          </td>
                          <td>
                          {category.description}
                          </td>
                          <td>
                          {category.active}
                          </td>
                        </tr>
                        </>)
              }
              )
            :
                        <tr>
                          <td>No Category Found</td>
                        </tr>
            }
                        
                      </tbody>
                    </table>
            
                  </div>
                </div>
              </div>
            </div>

            </div>
            </div>
            </div>
  :
  <div>
    <div style={{margin:"6%"}}>
    <div class="content">
    <div class="container-fluid">
    <div class="row"></div>
        <div class="col-md-12">
              <div class="card card-plain">
                <div class="card-header card-header-primary">
                  <Dimmer active inverted>
                    <Loader />
                  </Dimmer>
                </div>
              </div>
            </div>
    </div>
    </div>
    </div>
  </div>
   
  }
           
    
    </>
    )
  }
}


const mapStateToProps = state => {
  console.log("state"+ JSON.stringify(state))
  return {
     category: state.category.category,
     loading:state.category.loading
  }
 
}

export default connect(
  mapStateToProps,
  {GetCategory}
)(Category)