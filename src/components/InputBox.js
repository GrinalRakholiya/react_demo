import React, { useState } from "react";

function InputBox() {
    const [data, setData] = useState()
    const [print, setPrint] = useState(false)
    function GetData(val) {
        setData(val.target.value)
        setPrint(false)
    }
    return (
        <>
            {
                print ?
                    <h1>{data}</h1>
                    : null
            }
            <input type="text" onChange={GetData} />
            <button onClick={() => setPrint(true)}>Print Data</button><br /><br />
        </>
    )
}
export default InputBox;