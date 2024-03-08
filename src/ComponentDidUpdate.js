import React, { Component } from 'react';

class ComponentDidUpdate extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }   
    componentDidUpdate(prevProps, prevState) {
        console.warn(prevState.count, this.state.count)
        if (this.state.count<10){
            this.setState({count:this.state.count+1})
        }
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count:1 })}>Increment Count</button>
            </div>
        );
    }
}

export default ComponentDidUpdate;
