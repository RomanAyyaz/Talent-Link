import React from 'react'
import Header from './Header'
import JobDetails from './JobDetails'
import { getJobData } from '../JobApis';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import CandidateList from '../CandidateList/CandidateList';

function ManageJobs() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["jobs", id],
    queryFn: () => getJobData(id),
  });

  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h2>Error loading job data</h2>

  let jobData = data?.data || [];

  // 🔹 Dummy quiz result data
  const quizResults = [
    { name: "Ayesha Khan", score: 92, time: "8m 30s", cvUrl: "#" },
    { name: "Ravi Sharma", score: 88, time: "9m 10s", cvUrl: "#" },
    { name: "Sara Lee", score: 85, time: "10m 5s", cvUrl: "#" },
  ];

  return (
    <div className="bg-bgcompanyProfile container mx-auto px-3 md:px-8 border">
      <Header />

      <div className="mt-8">
        <JobDetails jobData={jobData} />
      </div>

      <div className="mt-8">
        <CandidateList />
      </div>

      {/* 🔥 Top Quiz Performers Section */}
      <div className="mt-8 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Top Quiz Performers</h2>
        <div className="space-y-4">
          {quizResults.map((student, idx) => (
            <div key={idx} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold text-gray-700">{student.name}</p>
                <p className="text-sm text-gray-500">Score: {student.score}% | Time: {student.time}</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">View</button>
                <a href={student.cvUrl} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">Download CV</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageJobs;
