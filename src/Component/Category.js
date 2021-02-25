import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GetCategory } from '../Services/Category'
import { Table } from 'semantic-ui-react'

class Category extends Component{

  constructor(props) {
    console.log(" form constructor")
    super(props);
    this.state={
      category:''
    }
  }

  componentDidMount(){
    this.props.GetCategory()
  }


  static getDerivedStateFromProps(nextProps){
    return{
      category:nextProps.category
    }
  }
  
    
  render(){
    return(
    <>
      {/* <h1 style={{margin:'3%'}}>Categories</h1> */}
      <div style={{margin:'3%'}}>
          <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Serial</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Active</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {this.state.category ? this.state.category.map((category,index) => {  
           return(<>
            <Table.Row>
              <Table.Cell>{index+1}</Table.Cell>
              <Table.Cell>{category.name}</Table.Cell>
              <Table.Cell>{category.description}</Table.Cell>
              <Table.Cell>{category.active}</Table.Cell>
            </Table.Row>
            </>)
            }
            )
          :
          <Table.Row>
              <Table.Cell colspan={4}>No Record Found</Table.Cell>
          </Table.Row>
        }
         </Table.Body>
           
        </Table>
      </div>
    
    </>
    )
  }
}


const mapStateToProps = state => {
  console.log("state"+ JSON.stringify(state))
  return {
     category: state.category.category,
  }
 
}

export default connect(
  mapStateToProps,
  {GetCategory}
)(Category)