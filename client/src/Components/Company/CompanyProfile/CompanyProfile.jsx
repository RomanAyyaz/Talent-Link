import React from 'react'
import CompanyInfo from './ProfileComponents/CompanyInfo'
import BusinessOverview from './ProfileComponents/BusinessOverview'
import SocialMediaLinks from './ProfileComponents/SocialMediaLinks'
import CompanyRepresentatives from './ProfileComponents/CompanyRepresentatives'
import ComapnyProjects from './ProfileComponents/CompanyProjects'
import { useCompanyStore } from '../../../Store/CompanyStore'

function CompanyProfile() {
  //Importing the company data 
   const { company} = useCompanyStore()
  return (
    <div className='border bg-bgcompanyProfile'>
        {/* Company Information */}
        <CompanyInfo company = {company}/>
        <BusinessOverview company = {company} />
        <SocialMediaLinks company = {company} />
        <CompanyRepresentatives company = {company}/>
        <ComapnyProjects/>
    </div>
  )
}

export default CompanyProfile