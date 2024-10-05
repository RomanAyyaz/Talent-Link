import React from 'react'
import { useContext } from 'react'
import { ResumeInfoContext } from '../../../Context/ResumeInfoContext'
import PersonalDetail from './ResumePreviewCompoents/PersonalDetail'
import Summary from './ResumePreviewCompoents/Summary'
import ProfessionalExp from './ResumePreviewCompoents/ProfessionalExp'
import Education from './ResumePreviewCompoents/Education'
import Skills from './ResumePreviewCompoents/Skills'
function ResumePreview() {
    const {resumeInfo} = useContext(ResumeInfoContext)
  return (
    <div className='text-start shadow-lg p-14 h-full border-t-[20px]' style={{borderColor:resumeInfo.themeColor}}>
        {/* Personal Details */}
        <PersonalDetail resumeInfo= {resumeInfo}/>
        {/* Summary */}
        <Summary resumeInfo= {resumeInfo} />
        {/* Professional Experience */}
        <ProfessionalExp resumeInfo= {resumeInfo}/>
        {/* Education */}
        <Education resumeInfo={resumeInfo}/>
        {/* Skills */}
        <Skills resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview