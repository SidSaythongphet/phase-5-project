import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const Login = ({ setFamily }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    if (response.ok) {
      setFamily(data)
      navigate("/")
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
      </div>
      <Button onClick={ handleSubmit } variant='contained'>Submit</Button>
    </Box>
  );
}

export default Login