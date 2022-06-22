import React from 'react';
import { Avatar } from '@mui/material';

const FamilyAvatar = ({ user }) => {
  return (
    <Avatar alt={ user.first_name }>{ user.first_name[0]}</Avatar>
  )
}

export default FamilyAvatar