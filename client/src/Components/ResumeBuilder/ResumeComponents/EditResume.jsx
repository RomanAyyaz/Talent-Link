import React, { useState } from 'react'
import FormSection from './FormSection'
import ResumePreview from './ResumePreview'
import { ResumeInfoContext } from '../../../Context/ResumeInfoContext'
import { useEffect } from 'react'
import dummy from "../ResumeData/DummyData"
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getDataOfResumeApi } from '../ResumeApis/ResumeApi'
function EditResume() {
  //Use param hook for extracting id from the url
    let { id } = useParams();
    //Api calling for getting the data of that specific resume
  const { data, isLoading, error } = useQuery({
    queryKey: ["resumes", id],
    queryFn: () => getDataOfResumeApi(id),
  });
  const [resumeInfo,SetResumeInfo] = useState({})
  const resumeData = data?.data || {};
  useEffect(() => {
    if (data && data.data) {
      SetResumeInfo(resumeData);
    } else {
      SetResumeInfo({});
    }
  }, [data]); 

  console.log(resumeInfo)
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