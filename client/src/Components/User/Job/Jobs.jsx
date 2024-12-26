import React from 'react'
import Navbar from '../LandingPage/Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import { getAllJobsApi } from './JobApis'
import {useQuery} from '@tanstack/react-query'
import AllJobslist from './AllJobs/AllJobslist'
function Jobs() {
  let{data,isLoading,Error} = useQuery({
    queryKey:['jobs'],
    queryFn: getAllJobsApi
})
if(isLoading){
    <div>Data Loading...</div>
} 
if(Error){
    <div>Error in loading jobs data</div>
}
let jobData = data? data.jobData : []

  return (
    <div>
        <Navbar/>
        <div className='flex w-full flex-col md:flex-row  my-14'>
            <div className='px-6 md:px-10 w-full md:w-2/6'>
                <Sidebar/>
            </div>
            <div className='flex  gap-3 px-6 mt-4  w-full  md:w-3/5'>
               {
                        jobData ? 
                        jobData.map((job,index)=>{
                          return (
                          //  <div className=' border border-red-900'>
                            <AllJobslist job = {job} key={index}/>
                          //  </div>
                              
                          )
                        })
                         : null
            }
            </div>
        </div>
    </div>
  )
}

export default Jobs