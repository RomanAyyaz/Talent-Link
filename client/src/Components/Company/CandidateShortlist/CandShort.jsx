import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  MapPin,
  Clock,
  FileText,
  MessageCircle,
  Trash2,
  Eye,
} from "react-feather";
import { getShortlistedCandidatesData } from "../CompanyApi";
import { Link } from "react-router-dom";
import { useDarkModeStore } from "../../../Store/DarkModeStore";

/* ───────────────── CandidateCard ───────────────── */
const CandidateCard = ({ candidate }) => {
  const { mode } = useDarkModeStore();

  // dark-mode helpers
  const cardBg   = mode === "dark" ? "bg-dark"     : "bg-white";
  const headText = mode === "dark" ? "text-white"  : "text-slate-900";
  const mutedTxt = mode === "dark" ? "text-gray-400" : "text-slate-500";
  const borderBtn= mode === "dark" ? "border-gray-600 hover:bg-gray-700" : "border-slate-200 hover:bg-slate-50";

  return (
    <div className={`${cardBg} rounded-2xl p-6 shadow-sm mb-5`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        {/* left chunk */}
        <div className="flex gap-5">
          <img
            src={`http://localhost:8000/public${candidate.userId.imageUrl}`}
            alt={candidate.userId.fullname}
            className="w-[120px] h-[120px] rounded-lg object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className={`text-2xl font-bold ${headText}`}>
              {candidate.userId.fullname}
            </h2>
            <p className={`text-lg ${mutedTxt} mb-3`}>UX Designer</p>

            <div className="flex gap-6 mt-2">
              <div className={`flex items-center gap-2 ${mutedTxt}`}>
                <MapPin size={18} className="text-slate-400" />
                <span>Newyork, USA</span>
              </div>
              <div className={`flex items-center gap-2 ${mutedTxt}`}>
                <Clock size={18} className="text-slate-400" />
                <span>1 Year Ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* action buttons */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <button
            className={`flex items-center gap-2 px-5 py-3 rounded-lg ${borderBtn} transition-colors`}
          >
            <FileText size={18} />
            <span>Download CV</span>
          </button>

          <button
            className={`relative p-3 rounded-lg ${borderBtn} transition-colors`}
          >
            <MessageCircle size={18} />
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
              10
            </span>
          </button>

          <Link
            to={`/dashboardCompany/candidateProfile/${candidate.userId._id}/${candidate.jobId}`}
            className={`p-3 rounded-lg ${borderBtn} transition-colors ${mutedTxt}`}
          >
            <Eye size={18} />
          </Link>

          <button
            className={`p-3 rounded-lg ${borderBtn} transition-colors text-red-500`}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ───────────────── CandShort page ───────────────── */
const CandShort = () => {
  const { mode } = useDarkModeStore();
  const { data, isLoading, error } = useQuery({
    queryKey: ["jobApplication"],
    queryFn: getShortlistedCandidatesData,
  });
  if (isLoading) return <h1>Loading…</h1>;
  if (error) return <h2>Error</h2>;

  const candidates = data?.data || [];

  // page bg
  const pageBg = mode === "dark" ? "bg-darkk" : "bg-[#f8f7f4]";
  const pageHead = mode === "dark" ? "text-white" : "text-slate-900";

  return (
    <div className={`max-w-7xl mx-auto p-5 min-h-screen ${pageBg}`}>
      <h1 className={`text-3xl font-bold mb-6 ${pageHead}`}>
        Candidate Shortlist
      </h1>
      <div>
        {candidates.map((cand) => (
          <CandidateCard key={cand._id} candidate={cand} />
        ))}
      </div>
    </div>
  );
};

export default CandShort;
