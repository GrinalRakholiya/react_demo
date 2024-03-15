import React, { createContext } from "react";
import ComponentA from "./componentA";

const FirstName = createContext()
const LastName = createContext()

const ContextAPI = () => {
    return (
        <>
            <FirstName.Provider value={"Grinal"}>
                <LastName.Provider value={"Rakholiya"}>
                    <ComponentA />
                </LastName.Provider>
            </FirstName.Provider>

        </>
    )
}
export default ContextAPI
export { FirstName, LastName }