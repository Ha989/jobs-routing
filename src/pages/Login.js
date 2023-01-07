import { Stack } from '@mui/system';
import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate, useLocation } from 'react-router-dom';


function Login() {
   let navigate = useNavigate();
   let location = useLocation();
   let from = location.state?.from?.pathname || "/";
  return (
    <Stack >
       <LoginForm 
       callback={() => {
        navigate(from, {replace: true});
       }}
       /> 
    </Stack>
  )
}

export default Login