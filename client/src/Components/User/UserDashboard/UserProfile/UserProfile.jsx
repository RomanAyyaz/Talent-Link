import React from 'react'
import UserDetailsForm from './UserForms/UserDetailsForm'
import UserSocialLinks from './UserForms/UserSocialLinks'

function UserProfile() {
  return (
    <div className='w-full px-8  bg-bgcompanyProfile border'>
        <UserDetailsForm/>
        <UserSocialLinks/>
    </div>
  )
}

export default UserProfile