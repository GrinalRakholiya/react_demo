import React, { useState } from "react"

function Hide(){
    const[status,setStatus]=useState(true)
    return(
        <>
        {
            status?
            <h1>Hide Show example</h1>
            :null
        }
        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={() => setStatus(true)}>Show</button><br /><br />
        <button onClick={() => setStatus(!status)}>Toggle</button><br /><br /> 
        </>
    )
}
export default Hide