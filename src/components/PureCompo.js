import React, { PureComponent } from "react";

class pureComp extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    render() {
        console.warn("check rerendering")
        return (
            <>
                <h1>Pure Component in Class Component</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update Count</button>
            </>
        );
    }
}
export default pureComp