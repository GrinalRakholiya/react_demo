import React from "react";
import { Table } from 'react-bootstrap'

function NestedList() {
    const users = [
        {
            name: "Ira", email: "ira@gmail.com", address: [
                { HN: "10", city: "Surat", country: "India" },
                { HN: "24", city: "Bombay", country: "India" },
                { HN: "65", city: "Baroda", country: "India" }
            ]
        },

        {
            name: "Ira", email: "ira@gmail.com", address: [
                { HN: "10", city: "Surat", country: "India" },
                { HN: "24", city: "Bombay", country: "India" },
                { HN: "65", city: "Baroda", country: "India" }
            ]
        }
    ]
    return (
        <>
            <h1>List with Nested Array</h1>
            <Table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                </tbody>
                {
                    users.map((data, i) =>

                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>
                                <Table>
                                    <tbody>
                                        {data.address.map((item) =>
                                            <tr>
                                                <td>{item.HN}</td>
                                                <td>{item.city}</td>
                                                <td>{item.country}</td>

                                            </tr>)}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    )
                }
            </Table>
        </>
    )
}
export default NestedList