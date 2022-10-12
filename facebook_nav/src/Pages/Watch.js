import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    margin-top: 50px;
`

const Sp = styled.span`
    margin: 20px;

`

const Watch = () => {
    return (
        <Div>
            <h1>Popular Videos</h1>
            <Sp><iframe width="560" height="315" src="https://www.youtube.com/embed/BddP6PYo2gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Sp>
            <Sp><iframe width="560" height="315" src="https://www.youtube.com/embed/7c3-Gei5j4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Sp>
        </Div>
    )
}

export default Watch
