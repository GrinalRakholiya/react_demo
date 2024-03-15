import React, { useState } from "react"
import ChildPreviousProps from "./childPreviousProps"

function PreviousProps() {
   const[count,setCount]=useState(0)
    return (
        <>
            <ChildPreviousProps count={count}/>
            <button onClick={() => setCount(Math.floor(Math.random() * 10))}>Update counter</button>
        </>
    )
}
export default PreviousProps