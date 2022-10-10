import React,{useState, useEffect} from 'react'

const UseEffectWithDependencies = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title=counter + " times clicked";
    }, [counter])

    return (
        <div>
            <h1>Counter Value is {counter}</h1>
            <button type="button" onClick={()=>{setCounter(counter+1)}}>Increment Counter</button>
            <button type="button" onClick={()=>{setCounter(counter-1)}}>Decrement Counter</button>
        </div>
    )
}

export default UseEffectWithDependencies
