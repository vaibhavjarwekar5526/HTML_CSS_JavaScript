import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const login=()=>{
        localStorage.setItem('login', true)
        navigate('/')
    }

    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(login)
        {
            navigate("/")
        }
    });


    return (
        <div>
            <label>
                Username:
                <br/>
                <input type="text"/>
            </label>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login
