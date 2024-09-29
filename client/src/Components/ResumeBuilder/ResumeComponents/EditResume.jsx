import React from 'react'
import FormSection from './FormSection'
import ResumePreview from './ResumePreview'

function EditResume() {
  return (
    <div className='w-full '>
        {/* Resume form Section */}
        <div className='w-1/2'><FormSection/></div>
        {/* Resume preview Section */}
        <div className='w-1/2'><ResumePreview/></div>
    </div>
  )
}

export default EditResume