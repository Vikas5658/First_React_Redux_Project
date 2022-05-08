import React from "react";
import "./App.css";
import EmailList from "./app/components/MailBody/EmailList";
import Mail from "./app/components/MailBody/Mail";
import SendMail from "./app/components/MailBody/SendMail";
import Login from "./app/components/login/Login";

import Header from "./app/components/Header";
import Sidebar from "./app/components/sidebar/Sidebar";
// import { selectSendMessageIsOpen } from "./features/mailSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import selectUser from './features/userSlice';
import Home from "./app/components/home/Home";
import Registration from "./app/components/login/Registration";
import DashBoard from "./app/components/home/DashBoard";
import { AuthProvider } from "./app/components/authContext/AuthContext";


function App() {
  // const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  
  
  return (
    <Router>

       
      
       <Routes>
            <Route path="/Login" element={<Login />} />                
              
            <Route path="/Registration" element={<Registration />} />    

            <Route path="/DashBoard" element={<DashBoard />} />   
              
           <Route path="/" element={<Home />} /> 
        </Routes>
        


     
        {/* <div className="App">
        {/* <Header />

        <div className="app_body">
          <Sidebar />



          <Routes>
            <Route path="/Mail" element={<Mail />} />       
         
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
        <SendMail />
      </div> */} 

    </Router>
  );
}

export default App;
