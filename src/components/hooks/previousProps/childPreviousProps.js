import React, { useEffect, useRef } from "react";

function ChildPreviousProps(props) {
    const lastValue = useRef()
    useEffect(() => {
        lastValue.current = props.count
    })
    return (
        <>
            <h1>current value {props.count}</h1>
            <h1>previous value {lastValue.current}</h1>
        </>
    )
}
export default ChildPreviousProps