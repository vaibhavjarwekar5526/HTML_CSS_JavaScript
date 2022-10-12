import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  width: 700px;
  margin: auto;
`

const Ul = styled.ul`
    width: 430px;
    margin: auto;
    li{
        text-align: left;
    }
`

const Groups = () => {
    return (
        <div>
            <h1>Everything You Need to Know About Facebook Groups</h1>
            <h3>You can use a Facebook group like a private room</h3>
            <P>A Facebook Group is a place for group communication, letting people share their common interests and express their opinions. Groups let people come together around a common cause, issue, or activity to organize, express objectives, discuss issues, post photos, and share related content. Anybody can create and manage a Facebook Group, and you can even join up to 6,000 other Groups.</P>
            <h3>Quick Facts About Facebook Groups</h3>
            <p>Here are some short tidbits on how Facebook Groups work:</p>
            <Ul>
                <li>Any Facebook user can make a group.</li>
                <li>Some groups let anyone join, but others might be private.</li>
                <li>When joining a group, whether private or public, your Facebook friends might see that you've joined it.</li>
                <li>Some groups are secret and can't be searched for, in which case a qualifying group member has to invite you.</li>
                <li>Leaving a group will not notify the other members.</li>
            </Ul>
        </div>
    )
}

export default Groups
