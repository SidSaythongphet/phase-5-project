import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const AddFamilyMember = ({ onAddMember }) => {
  const [toggle, setToggle] = useState(false)
  const [formData, setFormData] = useState({
    first_name: "",
    role: "parent/guardian"
  })

  const roles = [
    {
      value: 'parent/guardian',
      label: 'Parent/Guardian',
    },
    {
      value: 'child',
      label: 'Child',
    },    
    {
      value: 'roommate',
      label: 'Roommate',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    console.log(formData)

    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    if (response.ok) {
      onAddMember(data)
    } else {
      console.log("error")
    }
  }

  return (
    <>
      { !toggle 
        ? 
        <IconButton onClick={ () => setToggle(!toggle)}>
          <AddIcon />   
        </IconButton>
        :
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <IconButton onClick={ () => setToggle(!toggle)} >
              <CloseIcon fontSize='small'/>   
            </IconButton> 
            <TextField
              required
              label="Name"
              name="first_name"
              value={ formData.first_name }
              onChange={ handleChange }
              maxWidth
            />
            <TextField
              required
              select
              label="Role"
              name="role"
              value={ formData.role }
              onChange={ handleChange }
              maxWidth
              SelectProps={{
                native: true,
              }}
              >
              {roles.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
              </TextField>
              <Button onClick={ handleAdd } variant='contained'>Add to family</Button>
          </CardContent>
        </Card>
      }
    </>
    )
}

export default AddFamilyMember