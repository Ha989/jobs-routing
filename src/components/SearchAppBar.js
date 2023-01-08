import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from "../auth/AuthContext";



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function SearchAppBar() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  let q = searchParams.get("q");



  const handleLogin = () => {
    navigate("/login")
  }
  const handleLogout = () => {
    auth.signOut(() => {
      navigate("/")
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target.value);
    let q = formData.get("q");
    setSearchParams({ q: q });
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar >
          <Typography
            onClick={() => {
              navigate("/")
            }}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            Job Routing
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              name='q'
              defaultValue={q ?? undefined}
              placeholder="Search job…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
          <Box sx={{flexGrow: 1}} />
            {auth?.user ? (
             <Button 
              sx={{cursor: "pointer"}}
              variant="contained"
              onClick={handleLogout}
              startIcon={<LogoutIcon />}
              >
              <AccountCircleIcon />
                Logout
              </Button>
            ) : ( 
              <Button 
              sx={{cursor: "pointer"}}
              startIcon={<LoginIcon />}
              variant='contained'
              onClick={handleLogin}
              color="secondary"
              >
               Login
              </Button>
            )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SearchAppBar;