import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MapPin, Clock, FileText, MessageCircle, Trash2  ,  Eye } from 'react-feather';
import { getShortlistedCandidatesData } from '../CompanyApi';
import { Link } from 'react-router-dom';

const CandidateCard = ({ candidate }) => {
    console.log('ff',candidate)
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex gap-5">
          <img 
           src={`http://localhost:8000${candidate.userId.imageUrl}`}
            //src={candidate.userId.imageUrl || "/placeholder.svg"} 
            alt={candidate.userId.fullname} 
            className="w-[120px] h-[120px] rounded-lg object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-slate-900">{candidate.userId.fullname}</h2>
            <p className="text-lg text-slate-500 mb-3">UX Designer</p>
            
            <div className="flex gap-6 mt-2">
              <div className="flex items-center gap-2 text-slate-500">
                <MapPin size={18} className="text-slate-400" />
                <span>Newyork, USA</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Clock size={18} className="text-slate-400" />
                <span>1 Year Ago</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-5 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <FileText size={18} />
            <span>Download CV</span>
          </button>
          <button className="relative p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <MessageCircle size={18} />
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
              10
            </span>
          </button>
          <button className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-500">
             <Link
                        to={`/dashboardCompany/candidateProfile/${candidate.userId._id}/${candidate.jobId}`}
                      >
            <Eye size={18} />
            </Link>
          </button>
          <button className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-red-500">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

const CandShort = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["jobApplication"],
        queryFn: () => getShortlistedCandidatesData(),
      });
      if (isLoading) {
        <h1>Loading....</h1>;
      }
      if (error) {
        <h2>error</h2>;
      }
      let candidates = data?.data || [];

  return (
    <div className="max-w-7xl mx-auto p-5 bg-[#f8f7f4] min-h-screen">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Candidate Shortlist</h1>
      <div>
        {candidates?.map((candidate) => (
          <CandidateCard key={candidate._id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

;
export default CandShort