import React from 'react'
import CompanyInfo from './ProfileComponents/CompanyInfo'
import BusinessOverview from './ProfileComponents/BusinessOverview'
import SocialMediaLinks from './ProfileComponents/SocialMediaLinks'
import CompanyRepresentatives from './ProfileComponents/CompanyRepresentatives'
import ComapnyProjects from './ProfileComponents/CompanyProjects'

function CompanyProfile() {
  return (
    <div className='border bg-bgcompanyProfile'>
        {/* Company Information */}
        <CompanyInfo/>
        <BusinessOverview/>
        <SocialMediaLinks/>
        <CompanyRepresentatives/>
        <ComapnyProjects/>
    </div>
  )
}

export default CompanyProfile