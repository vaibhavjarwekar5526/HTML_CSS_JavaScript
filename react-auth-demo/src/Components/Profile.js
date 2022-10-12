import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const Logout = ()=>{
        localStorage.removeItem("login");
        navigate("/Login")
    }

    return (
        <div>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default Profile
