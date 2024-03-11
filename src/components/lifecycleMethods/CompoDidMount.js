import React, { Component } from "react";
class CompoDidMount extends Component {
    constructor() {
        super();
        this.state = {
            name: "Grinal"
        }
    }
    componentDidMount() {
        console.warn("componentDidMount")
    }
    render() {
        console.warn("render")
        return (
            <>
                <h1>ComponentDidMount Life Cycle Method {this.state.name}</h1>
                <button onClick={() => { this.setState({ name: "Greenal" }) }}>Update Name</button >
            </>
        )
    }
}
export default CompoDidMount