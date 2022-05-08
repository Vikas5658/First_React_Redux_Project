import React from 'react';
import './Dashboard.css'
import Header from '../Header';
import Sidebar from '../sidebar/Sidebar';
import Mail from '../MailBody/Mail';
import EmailList from '../MailBody/EmailList';
import SendMail from '../MailBody/SendMail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../../../features/mailSlice';


function DashBoard() {

  const isMessageOpen = true;
  // const isMessageOpen = useSelector(selectSendMessageIsOpen);

  // console.log(useSelector(selectSendMessageIsOpen));

    return ( 
      
        
        <div className="App">
        <Header /> 

        <div className="app_body">
            <Sidebar />
          
            {/* <Mail />         */}
            <EmailList />
         
        </div>
        {
          isMessageOpen && <SendMail />
        }
        
      </div>
      
     );
}

export default DashBoard;