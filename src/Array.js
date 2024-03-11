import React from "react";
import { Table } from 'react-bootstrap'

function Array() {
    const students = ["Ira", "Iva", "Iza"];
    const stuDetails = [
        { name: "Ira", email: "ira@gmail.com", dept: "IT" },
        { name: "Ira", email: "ira@gmail.com", dept: "CE" },
        { name: "Ira", email: "ira@gmail.com", dept: "IT" },
    ]
    return (
        <>
            <h1>Handle Array with List</h1>
            {
                students.map((data) =>
                    <h1>{data}</h1>
                )}
            <Table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>dept</td>
                    </tr>

                    {
                        stuDetails.map((data, i) =>
                            data.dept === 'IT' ?
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.dept}</td>
                                </tr> : null
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Array;
