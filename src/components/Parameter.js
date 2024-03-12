import React from "react"

function PassParam(props){
    return(<>
    <h1> Passing Function as Parameter</h1>
    <button onClick={props.data}>call data function</button>
    </>)
}
export default PassParam