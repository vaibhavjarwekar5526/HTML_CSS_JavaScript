import React from 'react';
import se from '../se.png';
import styled from 'styled-components';

const Div = styled.div`
  img{
      width: 250px;
  }
`



const Home = () => {
    return (
        <div>
            <h1>Welcome To Facebook Home Page</h1>
            <h2>Vaibhav Jarwekar</h2>
            <h2>Employee Id: 123456789</h2>
            <h2>Trainee Software Engineer</h2>
            <Div>
                <img src={se} alt="Software Engineer"/>
            </Div>
        </div>
    )
}

export default Home
