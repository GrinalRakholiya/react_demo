import React, { Component } from "react";
class Prop extends Component{
    render(){
        return(
            <h1 style={{backgroundColor:"orange"}}>Hello {this.props.name}</h1>
        )
    }
}
export default Prop