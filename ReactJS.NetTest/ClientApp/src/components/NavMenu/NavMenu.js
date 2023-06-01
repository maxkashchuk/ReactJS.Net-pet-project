import React from 'react';
import { useNavigate } from "react-router-dom";
import './NavMenu.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const NavMenu = () => {
  const navigate = useNavigate();

  function goToLogin()
  {
    navigate("/login")
  }

  return (
    <div>
          <Box>
            <AppBar position="static">
              <Toolbar sx={{backgroundColor: '#BBA89C!important', height: '10vh'}} className='navbar'>
                <Typography variant="h6" component="div" sx={{ 
                  flexGrow: 1, 
                  pointerEvents: 'none',
                  fontFamily: 'Satisfy, cursive',
                  fontSize: '5vh'
                   }}>
                  Time manager
                </Typography>
                <Button variant="outlined" onClick={goToLogin} color="inherit">Login<LoginIcon className='navbarLoginBtn'/></Button>
              </Toolbar>
            </AppBar>
          </Box>
    </div>
  );
}

export default NavMenu