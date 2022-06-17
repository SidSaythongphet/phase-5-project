import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setFamily }) => {
  const [formData, setFormData] = useState({
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    if (response.ok) {
      setFamily(data)
      navigate('/')
    } else {
      console.log("error")
    }
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
          label="Family Name"
          name="last_name"
          value={ formData.last_name }
          onChange={ handleChange }
        />
        <TextField
          required
          label="Email Address"
          name="email"
          value={ formData.email }
          onChange={ handleChange }
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={ formData.password }
          onChange={ handleChange }
        />
        <TextField
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