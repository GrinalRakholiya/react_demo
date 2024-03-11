import React, { Component, createRef } from "react";

class Ref extends Component {
    constructor() {
        super();
        this.inputRef = createRef();
    }
    componentDidMount() {
        //console.warn(this.inputRef.current.value = "100")
    }
    getVal()
    {
        console.warn(this.inputRef.current.value)
        this.inputRef.current.style.color="red";
        this.inputRef.current.style.backgroundColor = "pink";
    }

    render() {
        return (
        <>
            <h1>ref in react</h1>
            <input type="text" ref={this.inputRef} />
            <button onClick={()=>this.getVal()}>check ref</button>
        </>
        );
    }

}
export default Ref