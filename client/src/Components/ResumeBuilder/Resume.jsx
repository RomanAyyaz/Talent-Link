import React from 'react'
import AddResume from './ResumeComponents/AddResume'
import { getAllResumes } from './ResumeApis/ResumeApi';
import { useQuery } from '@tanstack/react-query';
import ResumesDisplay from './ResumeComponents/ResumesDisplay';

function Resume() {
  //Api Calling for getting all the resumes 
  const { data, isLoading, error } = useQuery({
    queryKey: ["resumes"],
    queryFn: () => getAllResumes(),
  });
  if(isLoading) {
    <h1>Loading....</h1>
  }
  if(error) {
    <h2>error</h2>
  }
  let resumesData = data?.data || []
  return (
    <div className='py-10 px-6 md:pl-32 md:pr-1 text-start w-full'>
        <h2 className='font-bold text-3xl'>My Resume</h2>
        <p className='mt-1'>Strat Creating AI resume to your next job</p>
        <div className='flex w-full flex-wrap gap-3 md:gap-4 mt-4'>
            <div className='w-5/12 md:w-3/12 lg:w-1/5'><AddResume/></div>
            {
              resumesData.map((resume,index)=>{
                return (
                  <div className='w-5/12 md:w-3/12 lg:w-1/5' key={index}>
                    <ResumesDisplay resume= {resume}/>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default Resume