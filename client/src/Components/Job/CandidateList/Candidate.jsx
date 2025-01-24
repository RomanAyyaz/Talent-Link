import React from "react";
import { FileText, Send, Check, Trash2, MapPin, Clock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { updateJobStatus } from "../JobApis";
import { useParams } from "react-router-dom";
function Candidate({ candidateData }) {
  let {id}  = useParams();
  let updateCandidateStatus = useMutation({
    mutationFn:   updateJobStatus,
    onSuccess: () => {
      console.log("Job application status has been updated");
    },
    onError: () => {
      console.log("Some error in updating the job application");
    },
  });
  return (
    <div className="bg-white   rounded-xl p-6 shadow-sm">
      <div className="flex flex-col  md:flex-row items-start md:items-center gap-6">
        {/* Profile Image */}
        <img
          src="
https://html.themewant.com/jobpath/template/assets/img/author/1.svg"
          alt="Profile"
          className="w-20 h-20 rounded-lg object-cover"
        />

        {/* Candidate Info */}
        <div className="flex-grow text-start ">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {candidateData.userId.fullname}
          </h2>
          <h3 className="text-gray-500 mb-3">UX Designer</h3>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Newyork, USA</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>1 Year Ago</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200  hover:bg-green-500 hover:text-white transition-colors">
            <FileText className="w-4 h-4" />
            <span>Download CV</span>
          </button>
          <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-green-500 hover:text-white transition-colors">
            <Send className="w-4 h-4" />
          </button>
          <button  className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-green-500 hover:text-white transition-colors"
            onClick={()=>{ 
              updateCandidateStatus.mutate({userId:candidateData.userId._id ,jobId:id});
            }}   >
            <Check className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg border border-gray-200 text-red-500 hover:bg-green-500 hover:text-white transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Candidate;
