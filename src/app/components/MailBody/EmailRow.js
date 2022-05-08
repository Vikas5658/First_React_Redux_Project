import { Checkbox } from '@mui/material';
import React from 'react';
import {useNavigate} from "react-router-dom";
import { IconButton } from '@mui/material';
import './EmailRow.css'
import { useDispatch } from 'react-redux';
import { selectMail } from '../../../features/mailSlice';

function EmailBody({id, title, subject,description, time, name}) {

    
        const navigate = useNavigate();  
        const dispatch = useDispatch();

        const openMail = () =>{
            dispatch(
                selectMail({
                    name,
                    id, 
                    title, 
                    subject,
                    description, 
                    time
                }
                
            ))
            navigate("/Mail");
        }
    
    return ( 
        <>
        <div  className="email_body" >
            <div className="email_body_left">
                <Checkbox/>
                <p>{title}</p>
            </div>

            <div className="email_body_middle" >            

                <div className='middle_massage'>
                    <p><b>{subject}</b>{description}</p>
                </div>     
         
           </div>

           <div className='emailRow_time'>
                    <p>{time}</p>
            </div>
                          
           

                       
 
        </div>
        
        </>
        
     );
}

export default EmailBody;