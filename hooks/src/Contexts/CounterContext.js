import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = (value) => {
        setCounter(counter+value);
    }

    return (
        <CounterContext.Provider value={{counter, incrementCounter}}>
            {children}
        </CounterContext.Provider>
    )
}