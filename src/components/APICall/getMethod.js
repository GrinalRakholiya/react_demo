import React, { useEffect, useState } from "react";

function GetMethod() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {

            response.json().then((result) => {
                setData(result);
            });
        })
    }, []);

    console.warn(data)

    return (
        <>
            <h1> Get API call </h1>
            <table border="1">
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
                {
                    data.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>

                        </tr>
                    )
                }
            </table>
        </>
    )
}
export default GetMethod