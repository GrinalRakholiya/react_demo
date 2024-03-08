import React, { useState } from "react";
function Hooks() {
    const[data,setData]=useState("Hooks example")
    return (
        <>
        <h1>{data}!</h1>
        <button onClick={()=>setData("Hook data changed")}>Click Me</button>
        </>
        )
}
export default Hooks