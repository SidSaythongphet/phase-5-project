import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const SignUp = () => {
  const [formData, setFormData] = useState({
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Family Name"
          name="last_name"
          value={ formData.last_name }
          onChange={ handleChange }
        />
        <TextField
          required
          id="outlined-required"
          label="Email Address"
          name="email"
          value={ formData.email }
          onChange={ handleChange }
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          value={ formData.password }
          onChange={ handleChange }
        />
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          name="password_confirmation"
          value={ formData.password_confirmation }
          onChange={ handleChange }
        />
      </div>
      <Button onClick={ handleSubmit } variant='contained'>Submit</Button>
    </Box>
  );
}

export default SignUp