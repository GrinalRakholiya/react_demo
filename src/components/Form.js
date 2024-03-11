import React, { useState } from "react"

function Form() {
    const [name, setName] = useState("")
    const [interest, setInterest] = useState("")
    const[tnc,setTnc]=useState(false)
    function getFormData(e) {
        console.warn(name,interest,tnc);
        e.preventDefault()
    }
    return (
   
            <form onSubmit={getFormData}>
            <div className="form">
                <h1>Form</h1>
                <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} /><br /><br />
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>Marvel</option>
                    <option>DC</option>
                    <option>VC</option>
                </select><br /><br />
                <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)}/><span>accept terms and condition</span><br/><br/>
                <button>Submit</button>
           
        </div>
        </form>
    )
}
export default Form