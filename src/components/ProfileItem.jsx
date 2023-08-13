import React from 'react'
import '../css/ProfileItem.css'

const ProfileItem= (props)=> {
  return (
    <li className="profile-item">{props.children}</li>
  )
}

export default ProfileItem