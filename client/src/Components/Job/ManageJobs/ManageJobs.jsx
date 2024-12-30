import React from 'react'
import Header from './Header'
import JobDetails from './JobDetails'
import { getJobData } from '../JobApis';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import CandidateList from '../CandidateList/CandidateList';
function ManageJobs() {
  const {id} = useParams();
//Api Calling for getting The data of the specific job
const { data, isLoading, error } = useQuery({
  queryKey: ["jobs",id],
  queryFn: () => getJobData(id),
});
if(isLoading) {
  <h1>Loading....</h1>
}
if(error) {
  <h2>error</h2>
}
let jobData = data?.data || []
  return (
    <div className="bg-bgcompanyProfile container mx-auto px-3 md:px-8 border">
        <Header/>
        <div className="mt-8">
        <JobDetails jobData={jobData} />
      </div>
      <div className="mt-8">
        <CandidateList/>
      </div>
    </div>
  )
}

export default ManageJobs