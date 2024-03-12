import React, { forwardRef } from "react";

function ChildForwardRef(props, ref) {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
}
export default forwardRef(ChildForwardRef)