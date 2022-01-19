import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {

  const user = useSelector( (state) => state.user.user );

  return (
    <div>
      <div>name: {user.name}</div>
      <div>age: {user.age}</div>
      <div>email: {user.email}</div>
    </div>
  )
}

export default Profile
