import React, { useRef } from "react"

function UseRef() {
    let inputRef=useRef(null)
    function handleInput(){
        console.warn("function called")
        this.inputRef.current.style.color = "red";
    }
    return (
        <>
            <h1>useRef in react</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>check ref</button>
        </>
    )
}
export default UseRef