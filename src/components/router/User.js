import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    let { id, name } = useParams();

    return (
        <div>
            <h1>User No: {id}</h1>
            <h1>User Name: {name}</h1>
        </div>
    );
}

export default User;
