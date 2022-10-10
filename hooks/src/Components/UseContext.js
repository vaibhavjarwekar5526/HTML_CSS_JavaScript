import React, {useContext} from 'react'
import { CounterContext } from '../Contexts/CounterContext';

const UseContext = () => {
    const {counter, incrementCounter} = useContext(CounterContext)

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button type="button" onClick={()=> incrementCounter(1)}>Increment Counter</button>
        </div>
    )
}

export default UseContext
