import React from 'react';
import './Mail.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";
import { IconButton } from '@mui/material';

function Mail() {

    const navigate = useNavigate();
    return ( 
        <>

        <div className='mailContent'>
            <div className='topIcons'>
                <IconButton onClick={()=>navigate("/")}>
                <ArrowBackIcon />
                </IconButton>
                
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                
            </div>
            <div className='mainContent'>
                <h2>Welcome</h2>
            </div>
            
        </div>
        </>
     );
}

export default Mail;