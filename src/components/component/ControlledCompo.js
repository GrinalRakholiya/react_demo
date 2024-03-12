import React, { useState } from "react"

function ControlledCompo() {
    let [val, setVal] = useState("")
    return (
        <>
            <h1>Controlled Component</h1>
            <input type="text" value={val} onChange={e => setVal(e.target.value)} />
        </>
    )
}
export default ControlledCompo