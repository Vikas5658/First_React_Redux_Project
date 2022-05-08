import React from 'react';
import './Home.css';
import {useNavigate} from "react-router-dom";
import Login from '../login/Login';

function Home() {

    const navigate = useNavigate(); 
    
    return ( 
        <>
        <div className='home'>
            <h2>Welcome !!</h2>
            <div>
            <button onClick={()=>navigate("/Login")}>Login</button>
            <button onClick={()=>navigate("/Registration")}>Register</button>
            </div>
            
            
        </div>
        
        </>
     );
}

export default Home;