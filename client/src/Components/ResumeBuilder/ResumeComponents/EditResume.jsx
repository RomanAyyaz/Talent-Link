import React, { useState } from 'react'
import FormSection from './FormSection'
import ResumePreview from './ResumePreview'
import { ResumeInfoContext } from '../../../Context/ResumeInfoContext'
import { useEffect } from 'react'
import dummy from "../ResumeData/DummyData"
function EditResume() {
    const [resumeInfo,SetResumeInfo] = useState({})
    useEffect(() => {
      SetResumeInfo(dummy);
    }, []);
  return (
    <ResumeInfoContext.Provider value={{resumeInfo,SetResumeInfo}}>
        <div className='w-full flex px-5 mt-5'>
        {/* Resume form Section */}
        <div className='w-1/2 mr-5'><FormSection/></div>
        {/* Resume preview Section */}
        <div className='w-1/2'><ResumePreview/></div>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume