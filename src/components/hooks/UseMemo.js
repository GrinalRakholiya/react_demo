import React, { useState, useMemo } from 'react';

function UseMemo() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10)

    const multiCount = useMemo(() => {
        console.warn("multiCount called")
        return count * 5;
    }, [count]);

    return (
        <>
            <h1>useMemo Example</h1>
            <h2>Count: {count}</h2>
            <h2>Item: {item}</h2>
            <h2>{multiCount}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setItem(item + 1)}>Increment Item</button>
        </>
    );
}

export default UseMemo;
