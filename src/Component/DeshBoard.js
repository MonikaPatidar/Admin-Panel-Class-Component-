import React, { Component } from 'react';
import {Icon, Menu, Segment, Sidebar, Grid, Statistic, Card,Container } from 'semantic-ui-react'
import Login from './Login'
import Category from  './Category'

const Griddiv={
    height:"40%",
    width:"60%"
}

class UserDeshboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
          activeItem: ' ',
        };
      }

handleItemClick = (e,name) => 
    {
    this.setState({ activeItem: name.name })
    console.log(name)
    }
  
render(){
    return (
    <>
    <div>
        <Grid centered columns={2} style={{margin:"0.2% 0% 0% 7.5%"}}>
            <Grid.Row centered columns={4}>
            <Grid.Column>
            <Card style={Griddiv}>
                <Card.Content style={{textAlign:"center"}}>
                    <Statistic color='teal' size='mini'>
                        <Statistic.Value>82</Statistic.Value>
                        <Statistic.Label>teal</Statistic.Label>
                    </Statistic>
                </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column >
            <Card style={Griddiv}>
                <Card.Content style={{textAlign:"center"}}>
                    <Statistic color='red' size='mini'>
                    <Statistic.Value>98</Statistic.Value>
                    <Statistic.Label>teal</Statistic.Label>
                    </Statistic>
                </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column>
            <Card style={Griddiv}>
                <Card.Content style={{textAlign:"center"}}>
                    <Statistic color='teal' size='mini'>
                    <Statistic.Value>73</Statistic.Value>
                    <Statistic.Label>teal</Statistic.Label>
                    </Statistic>
                </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column>
            <Card style={Griddiv}>
                <Card.Content style={{textAlign:"center"}}>
                    <Statistic color='purple' size='mini'>
                    <Statistic.Value>82</Statistic.Value>
                    <Statistic.Label>teal</Statistic.Label>
                    </Statistic>
                </Card.Content>
            </Card>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Sidebar.Pushable as={Segment} style={{minHeight: '85vh'}}>
            <Sidebar 
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
            >
            <Menu.Item as='a'>
                <Icon name='home' />
                Home
            </Menu.Item>
            <Menu.Item as='a' name="category" onClick={(e,name)=>{this.handleItemClick(e,name)}}>
                <Icon name='gamepad' />
                Category
            </Menu.Item>
            <Menu.Item as='a' name="login"  onClick={(e,name)=>{this.handleItemClick(e,name)}}>
                <Icon name='camera'/>
                Products
            </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
          <Container>
            <Menu secondary stackable widths={4}>
               { (this.state.activeItem ==='category') ?
              <Menu.Item
                as={Category}
              >
              </Menu.Item>
              :
              (this.state.activeItem ==='login') ?
              <Menu.Item
              as={Login}
                >
              </Menu.Item>
              :
              (this.state.activeItem ==='home') ?
              <Menu.Item
              
              >
                <h1>Home</h1>
              </Menu.Item>
              :
              <h1>DeshBoard</h1>
              }
            </Menu>
          </Container>
            </Sidebar.Pusher>  
        </Sidebar.Pushable>
    </div>
    </>    
    )
}
}

export default UserDeshboard;