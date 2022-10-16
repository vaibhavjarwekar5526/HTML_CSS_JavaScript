import React, { useEffect, useContext } from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Protected from './Components/Protected';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {LoginContext} from './Contexts/LoginContext'


const Nav = styled.nav`
  background-color: rgb(204, 47, 47);
  border: 1px solid grey;
  padding: 20px;

`

const WrapperLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: white;
  border: 1px solid rgb(114, 129, 247);
  padding: 10px;
  background-color: rgb(114, 129, 247);
  margin: 20px;
  border-radius: 10px;
`



function App() {
  const {isLogin} = useContext(LoginContext);
  const navigate=useNavigate();
  




  useEffect(()=>{
    localStorage.removeItem('login');
    navigate('/')
  },[]);

  

  return (
    <div className="App">
      <Nav>
        <WrapperLink to="/Login">{isLogin ? "Login": "Logout"}</WrapperLink>
        <WrapperLink to="/Dashboard">Dashboard</WrapperLink>
      </Nav>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Dashboard" element={<Protected Component={Dashboard}/>}/>
        </Routes>
    </div>
  );
}

export default App;
