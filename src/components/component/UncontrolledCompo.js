import React, { useRef } from "react"

function UncontrolledCompo() {
    let inputRef = useRef(null)
    function submitForm(e) {
        e.preventDefault()
    }
    return (
        <div className="unControlledCompo">
            <h1>Uncontrolled Component</h1>
            <form onSubmit={submitForm}>
                <input type="text" ref={inputRef} />
                <input type="text" />
                <button>Submit</button>
            </form>
        </div>
    )

}
export default UncontrolledCompo