import { Button } from '@mui/material';
import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, Link} from 'react-router-dom'
import { auth } from '../../../firebase';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Login.css'
import { loginInitiate } from '../redux/Actions';
import {useNavigate} from "react-router-dom";


const Login = ()=> {
    const [state, setState] = useState({
        email:"",
        password:""
    })
    const {currentUser} = useSelector((state)=>state.user);
    

    const navigate = useNavigate();

    useEffect(() =>{
        if(currentUser){
            navigate('/DashBoard')
        }
    },[currentUser, navigate])

    const dispatch = useDispatch();

    const {email, password} = state;

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(email == email || password == password ){            
            navigate('/DashBoard')
        }
        dispatch(loginInitiate(email, password));
        setState({email:"",password:""})

    }

    const handleGoogleSignIn = () =>{

    }

    const handleFacebookSignIn = () =>{

    }
   
    const handleChnage = (e) =>{
        let {name, value} = e.target;
        setState({...state, [name]:value});
    }
    
    return ( 
        <>
        <div className='login'>            
            <div>
               <form className='form' onSubmit={handleSubmit}>
                   <h1 className='h3 mb-3 font-weight-normal' style={{textAlign:'center'}}>Sign In</h1>
                    <GoogleIcon onClick={handleGoogleSignIn}/>
                    <FacebookIcon onClick={handleFacebookSignIn}/>
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
                   <button className='btn btn-secondary btn-block' type='submit'>Login</button><hr/>
                   <p>Dont have an account</p>
                   <Link to='/registration'>
                       <button>Click here</button>
                   </Link>
               </form>
            </div>
        </div>
        </>
     );
}

export default Login;