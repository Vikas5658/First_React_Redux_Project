import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import './EmailList.css';
import EmailRow from './EmailRow';
import CachedIcon from '@mui/icons-material/Cached';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton} from '@mui/material';


function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(()=>{
        db.collection('emails')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>
        setEmails(
            snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data(),
        })))
        )
    },[])
    return ( 
        <>
        <div className='email_list'>
            <div className='email_list_header'>
               
                    <h5>inbox<span>(16)</span></h5>
                    <div className='searchbox'>
                        <input></input>
                        <button>Search</button>
                    </div>
                     

            </div>
                            
            <div className='top_icons'>
                    <div className='left'>
                    <IconButton>
                        <CachedIcon/>
                    </IconButton>
                    <IconButton>
                        <VisibilityIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                        
                        
                    </div>
                    <div className='right'>
                    <IconButton>
                    <ArrowBackIosIcon/>
                    </IconButton>
                    <IconButton>
                    <ArrowForwardIosIcon/>
                    </IconButton>                
                                                
                    </div>
                </div>

            <div className='emailList_list'>
                {
                    emails.map(({id,data:{to, subject, message, timestamp, name}})=>(
                        <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        name="Vikas Thite"
                        subject="Subject"
                        description={message}
                        time={new Date(timestamp.seconds * 1000).toISOString()}
                        />
                    ))
                }
               
            </div>
        </div>
        </>
     );
}

export default EmailList;