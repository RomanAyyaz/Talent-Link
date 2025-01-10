import React from 'react'
import UserDetailsForm from './UserForms/UserDetailsForm'
import UserSocialLinks from './UserForms/UserSocialLinks'
import UserPortfolio from './UserForms/UserPortfolio'

function UserProfile() {
  return (
    <div className='w-full px-8  bg-bgcompanyProfile border'>
        <UserDetailsForm/>
        <UserSocialLinks/>
        <UserPortfolio/>
    </div>
  )
}

export default UserProfile