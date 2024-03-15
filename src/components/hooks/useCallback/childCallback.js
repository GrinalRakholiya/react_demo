import { React, memo } from "react";

function ChildCallback(Learning, add) {
    console.warn("child component")
    return (
        <>
        </>
    )
}
export default memo(ChildCallback)