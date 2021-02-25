import React, { Component } from 'react';
import { Container, Menu} from 'semantic-ui-react'
import Category from  './Category'
import Login from './Login'
debugger

class Navbar extends Component {

    // onItemChange = (e, { name }) => this.props.onItemClick(name);
   
    render() {
      return (
        <div>
          <Container>
            <Menu secondary stackable widths={4}>
              <Menu.Item
                as={Category}
                active={this.props.activeItem === 'category'}
              >
              </Menu.Item>
              <Menu.Item
                as={Login}
                active={this.props.activeItem === 'login'}
              >
              </Menu.Item>
            </Menu>
          </Container>
        </div>
      );
    }
  }

  export default Navbar