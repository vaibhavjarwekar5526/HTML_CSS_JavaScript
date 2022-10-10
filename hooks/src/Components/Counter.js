import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Counter Value is {counter}</h1>
            <button type="button" onClick={()=>{setCounter(counter+1)}}>Increment Counter</button>
            <button type="button" onClick={()=>{setCounter(counter-1)}}>Decrement Counter</button>
        </div>
    )
}

export default Counter
