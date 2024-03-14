import React, { useRef } from "react";
import ChildForwardRef from "./childForwardRef";

function ForwardRef() {
    let inputRef = useRef(null)
    function updateInput() {
        inputRef.current.style.color = "red";
        inputRef.current.focus()
    }
    return (
        <>
            <h1>forwardRef in react</h1>
            <ChildForwardRef ref={inputRef} />
            <button onClick={updateInput}>update inputBox</button>
        </>
    )
}
export default ForwardRef