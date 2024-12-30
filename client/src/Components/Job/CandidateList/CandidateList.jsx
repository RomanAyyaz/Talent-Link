"use client";

import { useQuery } from "@tanstack/react-query";
import { getCandidatesApi } from "../JobApis";
import { useParams } from "react-router-dom";
import Candidate from "./Candidate";
export default function CandidateList() {
  const { id } = useParams();
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
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 bg-white rounded-xl p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          Candidate List
        </h1>
        <div className="flex flex-wrap gap-4 text-base">
          <span className="font-semibold">Total: {candidatesData.length}</span>
          <span className="text-gray-500">ShortListed: 0</span>
          <span className="text-gray-500">Rejected: 0</span>
        </div>
      </div>

      {/* candidates lists */}
      {candidatesData.map((candidateData, i) => (
        <div className="my-2" key={i}>
          <Candidate candidateData={candidateData} />
        </div>
      ))}
    </div>
  );
}
