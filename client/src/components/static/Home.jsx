import React from 'react'
import FamilyDisplay from '../family/FamilyDisplay'

const Home = ({ family, onAddMember }) => {
  return (
    <div>
      Home
      <FamilyDisplay family={ family } onAddMember={ onAddMember } />
    </div>
  )
}

export default Home