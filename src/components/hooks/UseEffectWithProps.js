import React, { useEffect } from "react";

function UseEffectWithProps(props) {
    useEffect(() => {
        console.warn("count is " + props.count)
    }, [props.count])
    return (
        <>
            <h1>Count with Data:{props.count}</h1>
        </>
    )
}
export default UseEffectWithProps