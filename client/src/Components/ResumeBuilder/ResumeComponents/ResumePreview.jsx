import React from 'react'
import { useContext } from 'react'
import { ResumeInfoContext } from '../../../Context/ResumeInfoContext'
import PersonalDetail from './ResumePreviewCompoents/PersonalDetail'
import Summary from './ResumePreviewCompoents/Summary'
import ProfessionalExp from './ResumePreviewCompoents/ProfessionalExp'
import Education from './ResumePreviewCompoents/Education'
import Skills from './ResumePreviewCompoents/Skills'
import Certification from './ResumePreviewCompoents/Certification'
import Project from './ResumePreviewCompoents/Project'
function ResumePreview() {
    const {resumeInfo} = useContext(ResumeInfoContext)
    if (!resumeInfo || !resumeInfo.themeColor) {
      return <div>Loading resume data...</div>;
  }
  return (
    <div className='text-start shadow-lg p-8 lg:p-14 h-full border-t-[20px]' style={{borderColor:resumeInfo.themeColor}}>
        {/* Personal Details */}
        <PersonalDetail resumeInfo= {resumeInfo}/>
        {/* Summary */}
        <Summary resumeInfo= {resumeInfo} />
        {/* Education */}
        <Education resumeInfo={resumeInfo}/>
        {/* Professional Experience */}
        <ProfessionalExp resumeInfo= {resumeInfo}/>
        {/* Projects */}
        <Project resumeInfo={resumeInfo}/>
        {/* Certifications */}
        <Certification resumeInfo = {resumeInfo} />
        {/* Skills */}
        <Skills resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview