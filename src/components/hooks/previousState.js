import { useState } from "react"

function PreviousState() {
    const [count, setCount] = useState(1)
    function updateCounter() {
        let random = Math.floor(Math.random() * 10)
        setCount((pre) => {
            console.warn(pre)
            if (pre < 5) {
                alert("law value")
            }
            return random
        })
    }
    return (
        <>
            <h1>Previous State {count}</h1>
            <button onClick={updateCounter}>Update Counter</button>
        </>
    )
}
export default PreviousState