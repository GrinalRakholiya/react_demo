import { useState } from "react"

function POSTMethod() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    function saveUser() {
        console.warn(title, body)
        let data = { title, body }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.warn("result", result)
        })
    }
    return (
        <>
            <h1>POST API Example</h1>
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name="title" /><br /><br />
            <input type="text" value={body} onChange={(e) => { setBody(e.target.value) }} name="body" /><br /><br />
            <button type="button" onClick={saveUser}>Save New User</button>
        </>
    )
}
export default POSTMethod