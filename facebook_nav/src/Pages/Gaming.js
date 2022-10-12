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

const Gaming = () => {
    return (
        <Div>
            <h1>Popular Games</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Game</th>
                        <th>Developed By</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>God Of War</td>
                        <td>Santa Monica Studio</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>WWE Championship</td>
                        <td>Kung Fu Factory</td>
                        <td>2016</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>GTA 5</td>
                        <td>Rockstar North</td>
                        <td>2021</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Price Of Persia</td>
                        <td>Jordan Mechner</td>
                        <td>2016</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Subway Surfer</td>
                        <td>SYBO Games</td>
                        <td>2015</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Temple Run</td>
                        <td>Imangi Studios</td>
                        <td>2015</td>
                    </tr>
                </tbody>
            </table>
        </Div>
    )
}

export default Gaming
