import { Button } from '@mui/material';
import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import { auth } from '../../../firebase';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Login.css'
import { registerInitiate } from '../redux/Actions';

const Registration = ()=> {
    const [state, setState] = useState({
        name:"",
        mobile:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const {name, mobile, email, password, confirmPassword} = state;

    
    const {currentUser} = useSelector((state)=>state.user);
    

    const navigate = useNavigate();

    useEffect(() =>{
        if(currentUser){
            navigate('/Login')
        }
    },[currentUser, navigate])

    const dispatch = useDispatch();    

    const handleSubmit = (e) =>{                  
        // console.log(e)
        e.preventDefault();
        if(password !== confirmPassword){ 
            console.log("Wrong Credential")     ;     
            return;
        }
        console.log("Registered");
        dispatch(registerInitiate(email, password));        
        setState({email:"",password:"", confirmPassword:"", name:"", mobile:""})

    }    

    const handleChnage = (e) =>{
        let {name, value} = e.target;
        setState({...state, [name]:value});
    }

    
    
    return ( 
        <>
        <div className='register'>            
            <div>
               <form className='form' onSubmit={handleSubmit}>
                   <h1 className='h3 mb-3 font-weight-normal' style={{textAlign:'center'}}>Sign Up</h1>
                   <input 
                   type='text'
                   id='inputName'
                   className='form-control'                   
                   placeholder='Name'
                   name='name'
                   onChange={handleChnage}
                   value={name}
                   required/>

                    <input 
                   type='text'
                   id='mobile'
                   className='form-control'                   
                   placeholder='Mobile'
                   name='mobile'
                   onChange={handleChnage}
                   value={mobile}
                   required/>

                   <input 
                   type='email'
                   id='inputEmail'
                   className='form-control'                   
                   placeholder='Email'
                   name='email'
                   onChange={handleChnage}
                   value={email}
                   required/>
                   
                   <input 
                   type='password'
                   id='inputPassword'
                   className='form-control'                   
                   placeholder='Password'
                   name='password'
                   onChange={handleChnage}
                   value={password}
                   required/>

                    <input 
                   type='password'
                   id='confirmPassword'
                   className='form-control'                   
                   placeholder='Confirm Password'
                   name='confirmPassword'
                   onChange={handleChnage}
                   value={confirmPassword}
                   required/>

                   
                   <button className='btn btn-secondary btn-block' id='register' type='submit'>Register</button><hr/>
                   

                   <p>Already have an account</p>
                   <Link to='/'>
                       <button>Click here</button>
                   </Link>
               </form>
            </div>
        </div>
        </>
     );
}

export default Registration;