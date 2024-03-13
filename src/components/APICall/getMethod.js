import React, { useEffect, useState } from "react";

function GetMethod() {
    const [data, setData] = useState([])
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [id, setId] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            response.json().then((result) => {
                setData(result);
            });
        })
    }, []);

    function deleteUser(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
            })
        })
    }

    function selectUser(id) {
        console.warn(data[id - 1])
        let item = data[id - 1]
        setTitle(item.title)
        setBody(item.body)
        setId(item.id)
    }

    function updateUser() {
        let item = { title, body, id }
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)

        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
            })
        })
    }

    return (
        <>
            <h1> Get API call </h1>
            <table border="1">
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Body</td>
                    <td>Operation</td>
                </tr>
                {
                    data.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                            <td><button onClick={() => selectUser(item.id)}>Update</button></td>
                        </tr>
                    )
                }
            </table>
            <>
                <h1>PUT Method Example</h1>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /><br /><br />
                <input type="text" value={body} onChange={(e) => { setBody(e.target.value) }} /><br /><br />
                <button onClick={updateUser}>Update User</button>
            </>
        </>
    )
}
export default GetMethod