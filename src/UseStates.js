import { useState } from "react";

function UseState() {
    const [data, setData] = useState(0)
    function UpdateData() {
        setData(data + 1)
    }
    return (
        <>
            <h1>Data: {data}</h1>
            <button onClick={UpdateData}>Update Data</button>
        </>
    )
}
export default UseState