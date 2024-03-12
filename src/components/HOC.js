import React, { useRef, useState } from "react";

function HighOrderCompo() {
    return (
        <>
            <h1>High Order Component</h1>
            <HOCRed component={Counter} />
            <HOCPink component={Counter} />
        </>
    )
}
function HOCRed(props) {
    return <h1 style={{ backgroundColor: "red", width: "100" }}><props.component /></h1>
}

function HOCPink(props) {
    return <h1 style={{ backgroundColor: "pink", width: "100" }}><props.component /></h1>
}

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
        </>
    )
}

export default HighOrderCompo