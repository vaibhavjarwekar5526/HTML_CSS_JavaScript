import React from 'react';
import styled from 'styled-components';



const Div = styled.div`

    margin-top: 40px;
    table{
        border: 1px solid black;
        margin: auto;
        th,td{
            border: 1px solid black;
            padding: 10px;
        }
    }
`

const MarketPlace = () => {
    return (
        <Div>
            <h1>Market Place</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Product Name</th>
                        <th>Brand Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Laptop</td>
                        <td>Apple</td>
                        <td>1,50,000 Rs</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mobile</td>
                        <td>One Plus</td>
                        <td>30,000 Rs</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Smart Watch</td>
                        <td>Boat</td>
                        <td>4000 Rs</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Blutooth Headphones</td>
                        <td>Mivi</td>
                        <td>6000 Rs</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Pendrive</td>
                        <td>Sandisk (64 GB)</td>
                        <td>1000 Rs</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Power Bank</td>
                        <td>Mi</td>
                        <td>1500 Rs</td>
                    </tr>
                </tbody>
            </table>
        </Div>
    )
}

export default MarketPlace
