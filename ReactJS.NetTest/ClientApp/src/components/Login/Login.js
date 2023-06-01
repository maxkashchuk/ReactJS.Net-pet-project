import React, { useState } from 'react'
import './Login.css'
import LoginService from './LoginService'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const LoginField = styled(TextField)({
    '& label.Mui-focused': {
      transition: 'all 0.5s eased',
      color: '#f48700',
      fontWeight: 'bold',
    },
    '& .MuiInput-underline:after': {
      transition: 'all 0.5s eased',
      borderBottomColor: '#000000',
      fontWeight: 'bold',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        transition: 'all 0.5s eased',
        borderColor: '#f48700',
      },
      '&:hover fieldset': {
        transition: 'all 0.5s eased',
        borderColor: '#FFC75F',
      },
      '&.Mui-focused fieldset': {
        transition: 'all 0.5s eased',
        borderColor: '#f48700',
      },
    },
  });

const LoginButton = styled(Button)({
    width: '23vh',
    marginLeft: '12%',
    color: '#000000',
    borderColor: '#000000',
    '&:hover': {
        color: '#000000',
        borderColor: '#000000',
      },
      '&:active': {
        color: '#000000',
        borderColor: '#000000',
      },
      '&:focus': {
        color: '#000000',
        borderColor: '#000000',
      },
  });

const Login = () => {
    
    const [Email, setEmail] = useState();

    const [Password, setPassword] = useState();

    async function Login()
    {
        console.log(Email);
        console.log(Password);
    }
    
    return (
        <div className='background'>
            <div className='login-form'>
                <div className='login-inputs'>
                    <LoginField id="email" onChange={(emailValue) => setEmail(emailValue.target.value)} label="Email" variant="outlined" />
                </div>
                <div className='login-inputs'>
                    <LoginField id="password" onChange={(passwordValue) => setPassword(passwordValue.target.value)} label="Password" variant="outlined" />
                </div>
                <div className='login-button'>
                    <LoginButton variant='outlined' onClick={() => Login()}>Submit</LoginButton>
                </div>
                <div className='register-link-box'>
                    <a className='register-link' href='/register'>Not registered yet?</a>
                </div>
            </div>
        </div>
    )
}

export default Login