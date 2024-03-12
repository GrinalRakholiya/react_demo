import React from "react"

function Test(props) {
    console.warn("props", props)
    return (
        <>
            Test:{props.data}
        </>
    )
}
export default React.memo(Test)