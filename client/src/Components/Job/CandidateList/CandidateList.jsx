"use client";

import { useQuery } from "@tanstack/react-query";
import { getCandidatesApi } from "../JobApis";
import { useParams } from "react-router-dom";
import Candidate from "./Candidate";
import { useState } from "react";
export default function CandidateList() {
  const { id } = useParams();
  //State to show the Data 
  const [candidateStatus , setCandidateStatus] = useState('total')
  //Api Calling for getting The data of the specific job
  const { data, isLoading, error } = useQuery({
    queryKey: ["jobApplication", id],
    queryFn: () => getCandidatesApi(id),
  });
  if (isLoading) {
    <h1>Loading....</h1>;
  }
  if (error) {
    <h2>error</h2>;
  }
  let candidatesData = data?.data || [];
  let rejectedCandidateData =candidatesData.filter((data)=>{
    return data.status === 'rejected'
  })
  let shortlistedCandidateData =candidatesData.filter((data)=>{
    return data.status === 'shortlisted'
  })
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 bg-white rounded-xl p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          Candidate List
        </h1>
        <div className="flex flex-wrap gap-4 text-base">
          <button className="font-semibold" onClick={()=>{
            setCandidateStatus('total')
          }}  >Total: {candidatesData.length}</button>
          <button className="text-gray-500" onClick={()=>{
            setCandidateStatus('shortlisted')
          }}  >ShortListed: {shortlistedCandidateData.length}</button>
          <button className="text-gray-500" onClick={()=>{
            setCandidateStatus('rejected')
          }} >Rejected: {rejectedCandidateData.length}</button>
        </div>
      </div>

      {/* candidates lists */}
      {
        candidateStatus === 'total' ?  <>
        {candidatesData.map((candidateData, i) => (
          <div className="my-2" key={i}>
            <Candidate candidateData={candidateData} />
          </div>
        ))}
        </> :  candidateStatus === 'shortlisted' ? <>
        
        {shortlistedCandidateData.map((candidateData, i) => (
          <div className="my-2" key={i}>
            <Candidate candidateData={candidateData} />
          </div>
        ))}
        </>  :  <>
      
        {rejectedCandidateData.map((candidateData, i) => (
          <div className="my-2" key={i}>
            <Candidate candidateData={candidateData} />
          </div>
        ))} 
        </> 
      }
    
    </div>
  );
}
