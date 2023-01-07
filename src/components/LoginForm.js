
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Typography } from '@mui/material';
import  { useAuth } from "../auth/AuthContext";

const style = {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    border: "1px solid rgba(13, 12, 12, 0.2)",
    padding: "10px",
    borderRadius: "5px",
}



function LoginForm({ callback }) {
   const [username] = useState("hanguyen");
   const [password] = useState("1234");
   const [showPassword, setShowPassword] = useState(false);


   const auth = useAuth();

   const handleClickShowPassword = () => setShowPassword(!showPassword);

   const handleLogin = () => {
    auth.signIn(username, callback);
   }
   const handleMouseDownPassword  = (event) => {
    event.preventDefault();
  };


  return (
    <Box sx={style} component="form" gap={4} >
    <div>
        <Typography variant='h4' component="div" textAlign="center">
           Login 
        </Typography>
        <TextField
        variant="outlined"
        name='username'
        label="Username"
        value={username}
        sx={{ m: 1, width: '280px'}}
        />
        <FormControl sx={{ m: 1, width: '280px'}} variant="outlined">
            <InputLabel htmlFor='outlined-adorment-password'>
                Password
            </InputLabel>
            <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
            onClick={handleLogin}
            sx={{ m: 1, width: "10ch"}}
            variant="contained"
            >
            Login
        </Button>
    </div>
    </Box>
)
}

export default LoginForm;