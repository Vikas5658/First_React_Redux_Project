import { Button } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import {Dialog, DialogTitle, DialogContent} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import GradeIcon from '@mui/icons-material/Grade';
import './Sidebar.css';
import {useState} from 'react';
import SidebarOptions from './SidebarOptions';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../../features/mailSlice';

function Sidebar() {


    const dispatch = useDispatch();


   
    return ( 
      
        

        <div className='sidebar'>         
            <Button             
            startIcon={<AddIcon/>}
            className="sidebar_compose"
            onClick={()=>dispatch(openSendMessage())}>
                compose
            </Button>

            <p style={{
                fontSize:'12px',
                paddingTop:'20px',
                paddingLeft:'20px',
                paddingBottom:'20px'
            }}>FOLDERS</p>

            <SidebarOptions 
            Icon={InboxIcon}
            title="Inbox"
            number={54}
            isActive={true}
            />
            <SidebarOptions 
            Icon={MailIcon}
            title="Send mail"
            number={54}
            />

            <SidebarOptions 
            Icon={GradeIcon}
            title="important"
            number={54}
            />

            <SidebarOptions 
            Icon={GradeIcon}
            title="important"
            number={54}
            />

            <SidebarOptions 
            Icon={GradeIcon}
            title="important"
            number={54}
            />

          
            

        </div>
        
    )
   
}



export default Sidebar;