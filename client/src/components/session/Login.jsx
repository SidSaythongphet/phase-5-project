import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Avatar, Button, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Login = ({ setFamily, setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [open, setOpen] = useState(false)
  const [familyName, setFamilyName] = useState("")
  const [users, setUsers] = useState(null)
  const [select, setSelect] = useState(null)
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
      setOpen(true)
      setFamilyName(data.last_name)
      setUsers(data.users)
    } else {
      console.log("error")
    }
  }
  console.log(select)

  const handleChooseUser = async (e) => {
    e.preventDefault()
    
    const response = await fetch('/api/user_login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          id: select.id,
          first_name: select.first_name
        }
      })
    })
    const data = await response.json()
    if (response.ok) {
      navigate("/")
      setUser(data)
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
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          The { familyName.toLocaleUpperCase() } Household
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose account:
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          { users === null ? null : users.map(user => <IconButton key={ user.id } onClick={ () => setSelect(user) }><Avatar>{ user.first_name }</Avatar></IconButton>) }
          { select === null ? null : <Button onClick={ handleChooseUser }>Login to { select.first_name }</Button>}
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Login