import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(true);

    const change = () => {
        setIsLogin(!isLogin);
    }

    return (
        <LoginContext.Provider value={{isLogin, change}}>
            {children}
        </LoginContext.Provider>
    )
}