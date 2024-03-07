import React,{useEffect, useState} from "react";

function UseEffect()
{
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.warn("event after button clicked")
    })
    return(
        <>
        <h1>useEffect Example {count}</h1>
        <button onClick={()=>setCount(count+1)}>Update Counter</button>
        </>
    )
} 
export default UseEffect;