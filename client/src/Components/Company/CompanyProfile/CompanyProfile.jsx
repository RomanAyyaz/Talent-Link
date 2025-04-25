import React from 'react'
import CompanyInfo from './ProfileComponents/CompanyInfo'
import BusinessOverview from './ProfileComponents/BusinessOverview'
import SocialMediaLinks from './ProfileComponents/SocialMediaLinks'
import CompanyRepresentatives from './ProfileComponents/CompanyRepresentatives'
import ComapnyProjects from './ProfileComponents/CompanyProjects'
import { useCompanyStore } from '../../../Store/CompanyStore'
import { useDarkModeStore } from '../../../Store/DarkModeStore'

function CompanyProfile() {
  //Importing the company data 
    const { company} = useCompanyStore()
    const { mode, setMode } = useDarkModeStore();
  return (
    <div className={`border ${mode === 'light'?"bg-bgcompanyProfile ":"bg-darkk"}`}>
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