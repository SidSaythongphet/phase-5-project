import React from 'react'
import AddFamilyMember from './AddFamilyMember'
import FamilyAvatar from './FamilyAvatar'
import { Avatar, Stack, Tooltip } from '@mui/material';

const FamilyDisplay = ({ family, onAddMember }) => {

  const renderFamilyList = () => {
    if (family.users !== []) {
      const familyList = family.users.map(user => {
        return (
          <Tooltip key={ user.id } title={ user.first_name }>
            <Avatar alt={ user.first_name }>{ user.first_name[0].toUpperCase() }</Avatar>
          </Tooltip>
        )
      })
      return familyList
    }
  }

  return (
    <div>
      My Family
      { !family ? null : <Stack direction="horizontal">{ renderFamilyList() }</Stack> }
      { family && family.users.length < 8 ? <AddFamilyMember onAddMember={ onAddMember } /> : null }
    </div>
  )
}

export default FamilyDisplay