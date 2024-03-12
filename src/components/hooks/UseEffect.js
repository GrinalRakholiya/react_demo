import React, { useEffect, useState } from "react";
import UseEffectWithProps from "./UseEffectWithProps";

function UseEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.warn("event after button clicked")
    },[count])
    return (
        <>
            <h1>useEffect Example {count}</h1>
            <UseEffectWithProps count={count} />
            <button onClick={() => setCount(count + 1)}>Update Counter</button>
        </>
    )
}
export default UseEffect;