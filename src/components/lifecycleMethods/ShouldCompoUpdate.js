import React, { Component } from 'react';

class ShouldCompoUpdate extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    shouldComponentUpdate() {
        console.warn("shouldUpdateComponent", this.state.count)
        if (this.state.count > 5 && this.state.count < 10) {
            return true
        }
    }

    render() {
        return (
            <>
                <p>Count: {this.state.count}</p>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Increment Count</button>
            </>
        );
    }
}

export default ShouldCompoUpdate;
