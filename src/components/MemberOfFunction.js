import React from "react"

function MemberofFunction(props) {
    return (
        <>
            <h1> Passing Function as Parameter</h1>
            <button onClick={props.data}>call data function</button>
        </>)
}
export default MemberofFunction