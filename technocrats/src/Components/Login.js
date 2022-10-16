import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import {LoginContext} from '../Contexts/LoginContext';
import styled from 'styled-components';


const Div= styled.div`
    margin-top: 10px;
    input{
        padding: 5px;
        font-size: 18px;
        margin-top: 5px;
        border-radius: 7px;
    }
`

const H1 = styled.h1`
  color: rgb(114, 125, 247);
`

const Button = styled.button`
    border: 3px solid black;
    border-radius: 5px;
    background-color: rgb(45, 199, 247);
    padding: 10px 20px;
    margin-top: 20px;
`



const Login = () => {
    const navigate = useNavigate();
    const {change} = useContext(LoginContext);
    const login=()=>{
        localStorage.setItem('login', true)
        navigate('/Dashboard')
    }

    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(login)
        {
            navigate("/Dashboard")
           change();
        }
    });

    return (
        <div>
            <H1>Login Page for CEO</H1>
            <div>
                <Div><input type="email" placeholder="Enter Your Email"/></Div>
                <Div><input type="password" placeholder="Enter Your Password"/></Div>
            </div>
            <Button onClick={login}>Login</Button>
        </div>
    )
}

export default Login
