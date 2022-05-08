import React from 'react';
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DirectionsIcon from '@mui/icons-material/Directions';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, Paper, InputBase, Divider
     } from '@mui/material';

function Header() {
    return (
      <div className="header">
        <div className="header_left">
          <IconButton>
          <MenuIcon />
          </IconButton>   

          <div className='search_mail'>
          <IconButton>
            <SearchIcon/>
          </IconButton>
            <input
            type='text'
            placeholder='Search'/>
          </div>          
         
        </div>

        <div className="header_right">
          
        <IconButton>
          <MailIcon />
        </IconButton> 

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <LogoutIcon />
        </IconButton>     
   
        </div>
      </div>
    );
}

export default Header;