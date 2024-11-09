import React from 'react'
import CompanyInfo from './ProfileComponents/CompanyInfo'
import BusinessOverview from './ProfileComponents/BusinessOverview'
import SocialMediaLinks from './ProfileComponents/SocialMediaLinks'
import CompanyRepresentatives from './ProfileComponents/CompanyRepresentatives'

function CompanyProfile() {
  return (
    <div>
        {/* Company Information */}
        <CompanyInfo/>
        <BusinessOverview/>
        <SocialMediaLinks/>
        <CompanyRepresentatives/>
    </div>
  )
}

export default CompanyProfile