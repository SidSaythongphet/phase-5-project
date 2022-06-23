import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ family, user, setFamily, setUser }) => {
  let navigate = useNavigate()

  const login = () => {
    return (
      <>
        <Button color="inherit" onClick={ () => navigate("/signup") } >Sign Up</Button>
        <Button color="inherit" onClick={ () => navigate("/login") } >Login</Button>
      </>
    )
  }

  const logout = async () => {
    const response = await fetch('/api/logout', {
      method: 'DELETE'
    })
    if (response.ok) {
      setFamily(null)
      setUser(null)
      navigate("/login")
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { family === null ? "Please Log In" : `The ${family.last_name} Family` }
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { user === null ? null : `Hello, ${user.first_name}!` }
          </Typography>
          { family === null ? login() : <Button color="inherit" onClick={ logout } >Logout</Button> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar