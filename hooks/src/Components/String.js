import React, { useState } from 'react'

const String = () => {
    const [string, setString] = useState("");
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <input type="text" onChange={(e)=>{setString(e.target.value)}} />
            <h1>{string} clicked {counter} times</h1>
            <button type="button" onClick={()=>{setCounter(counter+1)}}>Increment Counter</button>
            <button type="button" onClick={()=>{setCounter(counter-1)}}>Decrement Counter</button>
        </div>
    )
}

export default String

