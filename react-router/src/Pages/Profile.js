import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Profile = () => {
    let navigate=useNavigate();
    let {userName, userId}= useParams();

    return (
        <div>
            <h1>This is a Profile Page for {userName} {userId}</h1>
            <button onClick={()=>{navigate("/BakeryPage")}}>Go to Bakery Page</button>
        </div>
    )
}

export default Profile
