import React from 'react';
import './SendMail.css';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {useForm} from 'react-hook-form';
import { db } from '../../../firebase';
import firebase from 'firebase/compat/app';

function SendMail() {
    const {register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
        db.collection('emails').add(
            {
                to:data.to,
                subject:data.subject,
                message:data.message,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            }
        );
    };

    return ( 
        <div className='sendMail'>
            <div className='sendMail_header'>
                <h3>New Message</h3>
                <CloseIcon className='sendMail-close'/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                name='to' 
                placeholder='To' 
                type="email"
                {...register('to', { required: "required" })}/>
                
                {errors.to &&(<p className='sensMail_error'>To is required</p>)}

                <input 
                name='subject' 
                placeholder='Subject' 
                type="text"
                {...register('subject', { required: true })}/>

                {errors.subject &&(<p className='sensMail_error'>Subject is required</p>)}

                <input
                name='message'
                placeholder='Message..' 
                type="text"
                rows='10'                                
                className='sendMail_message'
                {...register('message')}/>             

                
                    <Button type='submit'>Send</Button>
                
            </form>

        </div>
     );
}

export default SendMail;