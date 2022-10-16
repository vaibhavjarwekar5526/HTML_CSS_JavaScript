import React from 'react';
import useFetch from './useFetch';
import styled from 'styled-components';



const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 1120px;
  margin: auto;
`

const Div = styled.div`
    border: 5px solid black;
    width: 230px;
    margin: 20px;
    background-color: rgb(10, 240, 247);
    border-radius: 20px;

    h1{
        color: red;
    }
    p{
        color: rgb(16, 55, 235);
        font-weight: bold;
    }
`


const Dashboard = () => {
    const prod= useFetch("http://localhost:3001/products");

    const clients= useFetch("http://localhost:3001/clients");

    const revenue= useFetch("http://localhost:3001/revenue");
    const statistics= useFetch("http://localhost:3001/statistics");
   

    console.log(prod)

    return (
        <>
                    <MainDiv>
            <Div>
                <h1>All Products</h1>
                {
                    prod.map((curr)=>{
                        return <p>{curr.id} {curr.prod_name}</p>
                    })
                }
            </Div>
            <Div>
                <h1>Sales Statistics</h1>
                {
                    statistics.map((curr)=>{
                        return <p>{curr.name}</p>
                    })
                }
            </Div>
            <Div>
                <h1>Revenue Generated</h1>
                {
                    revenue.map((curr)=>{
                        return <p>{curr.year} {curr.rev}</p>
                    })
                }
            </Div>
            <Div>
                <h1>Clients List</h1>
                {
                    clients.map((curr)=>{
                        return <p>{curr.id} {curr.name}</p>
                    })
                }
            </Div>
        </MainDiv>

        </>
    )
}

export default Dashboard

