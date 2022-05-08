import React from 'react';
import './SidebarOptions.css';
import { Button } from '@mui/material';

function SidebarOptions({Icon, title, number, isActive}) {
    return ( 
        <div className={`sidebar_options ${isActive&&`sidebar_options--active`}`}>
        <Button className='inbox'>
            <Icon/>
            <h5>{title}</h5>
            <p>{number}</p>
        </Button>

       
        </div>
     );
}

export default SidebarOptions;