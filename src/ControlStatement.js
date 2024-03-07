import React, { useState } from "react";
function Statement() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [logIn, setLogIn] = useState(4)

    return (
        <div>
            <h2>If Else example</h2>
            {loggedIn ? <h1>Welcome Grinal</h1> : <h1>Welcome Guest</h1>}
            <h2>Else if example</h2>
            {logIn === 1 ? <h1>Guest 1</h1> : logIn === 2 ? <h1>Guest 2</h1> : <h1>Guest 3</h1>}
        </div>
    )
}
export default Statement