import React, { useState } from 'react'

function UState() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div>UState counter {counter}</div>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}

export default UState