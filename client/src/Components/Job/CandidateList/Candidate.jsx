import React from "react";
import { FileText, Check, Trash2, MapPin, Clock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { updateJobStatus } from "../JobApis";
import { Link, useParams } from "react-router-dom";
import { Eye } from "react-feather";
import { useDarkModeStore } from "../../../Store/DarkModeStore";

function Candidate({ candidateData }) {
  const { id } = useParams();
  const { mode } = useDarkModeStore();

  const updateCandidateStatus = useMutation({
    mutationFn: updateJobStatus,
    onSuccess: () => console.log("Job application status has been updated"),
    onError: () => console.log("Some error in updating the job application"),
  });

  /* ── Dark-mode helpers ────────────────────────────────────────────── */
  const cardClass = `
    rounded-xl p-6 shadow-sm
    ${mode === "light" ? "bg-white" : "bg-dark"}
  `.trim();

  const nameClass = `
    text-xl font-bold
    ${mode === "dark" ? "text-white" : "text-gray-900"}
  `.trim();

  const subtitleClass = `
    mb-3
    ${mode === "dark" ? "text-gray-400" : "text-gray-500"}
  `.trim();

  const mutedTextClass = `${mode === "dark" ? "text-gray-400" : "text-gray-500"}`;

  const btnBase = `
    flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors
    ${mode === "dark" ? "border-gray-600 text-gray-300" : "border-gray-200 text-gray-600"}
    hover:bg-green-500 hover:text-white
  `.trim();

  const iconBtnBase = `
    p-2 rounded-lg border transition-colors
    ${mode === "dark" ? "border-gray-600 text-gray-300" : "border-gray-200 text-gray-600"}
    hover:bg-green-500 hover:text-white
  `.trim();

  const iconBtnDanger = `
    ${iconBtnBase} ${mode === "dark" ? "text-red-400" : "text-red-500"}
  `.trim();
  /* ─────────────────────────────────────────────────────────────────── */

  return (
    <div className={cardClass}>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Profile Image */}
        <img
          src={`http://localhost:8000/public${candidateData.userId.imageUrl}`}
          alt="Profile"
          className="w-20 h-20 rounded-lg object-cover"
        />

        {/* Candidate Info */}
        <div className="flex-grow text-start">
          <h2 className={nameClass}>{candidateData.userId.fullname}</h2>
          <h3 className={subtitleClass}>UX Designer</h3>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className={`flex items-center ${mutedTextClass}`}>
              <MapPin className="w-4 h-4 mr-1" />
              <span>Newyork, USA</span>
            </div>
            <div className={`flex items-center ${mutedTextClass}`}>
              <Clock className="w-4 h-4 mr-1" />
              <span>1 Year Ago</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {/* Download CV */}
          <button className={btnBase}>
            <FileText className="w-4 h-4" />
            <span>Download CV</span>
          </button>

          {/* View */}
          <Link to={`/dashboardCompany/candidateProfile/${candidateData.userId._id}/${id}`}>
            <button className={iconBtnBase}>
              <Eye className="w-4 h-4" />
            </button>
          </Link>

          {/* Shortlist */}
          <button
            className={iconBtnBase}
            onClick={() =>
              updateCandidateStatus.mutate({
                userId: candidateData.userId._id,
                jobId: id,
                jobStatus: { status: "shortlisted" },
              })
            }
          >
            <Check className="w-4 h-4" />
          </button>

          {/* Reject */}
          <button
            className={iconBtnDanger}
            onClick={() =>
              updateCandidateStatus.mutate({
                userId: candidateData.userId._id,
                jobId: id,
                jobStatus: { status: "rejected" },
              })
            }
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Candidate;
