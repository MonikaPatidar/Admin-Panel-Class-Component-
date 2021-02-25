import React, { Component } from 'react';

class LifeCycle extends Component{
    constructor(props){
        debugger
        super(props);
            this.state={
                name:''
            }
        
    }

    componentDidMount(){
        debugger
        this.setState({
            name:"DidMount"
        })
    }

    componentWillMount(){
        debugger
        this.setState({
            name:"WillMount"
        })
    }

    render(){
        debugger
        return(
            <>
            <h1>{this.state.name}</h1>
            </>
        )
    }
}

export default LifeCycle;
