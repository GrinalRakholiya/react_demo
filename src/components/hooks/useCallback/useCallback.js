import React, { useCallback, useState } from "react";
import ChildCallback from "./childCallback";

function UseCallback() {
    const [add, setAdd] = useState(0)
    const Learning = useCallback(() => {
    }, [])

    return (
        <>
            <h1>callback example</h1>
            <ChildCallback Learning={Learning} />
            <h1>{add}</h1>
            <button onClick={() => { setAdd(add + 1) }}>Addition</button>
        </>
    )
}
export default UseCallback