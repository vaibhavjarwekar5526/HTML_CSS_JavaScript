import React, { useState } from 'react'

const CounterWithObject = () => {
    const [obj, setObj] = useState({counter:0, name:""});

    function increaseCounter(){
        setObj((prev)=>({
            ...prev,
            counter:prev.counter+1
        }))
    }

    function decreaseCounter(){
        setObj((prev)=>({
            ...prev,
            counter:prev.counter-1
        }))
    }

    /*function maintainString(){
        setObj((prev,e)=>({
            ...prev,
            name:e.target.value,
        }))
    }*/
    
    return (
        <div>
            {/*<input type="text" onChange={maintainString} />*/}
            <h1>clicked {obj.counter} times</h1>
            <button type="button" onClick={increaseCounter}>Increment Counter</button>
            <button type="button" onClick={decreaseCounter}>Decrement Counter</button>
        </div>
    )
}

export default CounterWithObject
