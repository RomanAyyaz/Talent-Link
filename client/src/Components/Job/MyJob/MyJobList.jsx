import React from 'react'
import { MapPin, Clock, Edit2, Eye, Trash2 } from 'lucide-react'
import {useMutation, useQueryClient} from "@tanstack/react-query"
import { deleteJobApi } from '../JobApis'
import { Link } from 'react-router-dom'
export default function MyJobList({job}) {
  let queryClient = useQueryClient()
  let deleteJobMutation = useMutation({
    mutationFn: deleteJobApi(),
    onSuccess:()=>{
      queryClient.invalidateQueries('jobs')
      console.log('Job delete SuccessFully')
    },
    onError:()=>{
      console.log("Some error in deleting the job")
    }
  })
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">{job.jobTitle}</h2>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              1 Applied
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>{job.employmentType}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 text-gray-600 text-sm">
            <span>Job Posted: 1 month ago</span>
            <span>Job deadline: May,10,2024</span>
          </div>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Pending
          </span>
        </div>

        <div className="flex gap-4 justify-start">
        <Link to={`/dashboardCompany/editJob/${job._id}`}>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Edit2 className="w-5 h-5 text-gray-600" />
          </button>
          </Link>
          <Link to = {`/dashboardCompany/manageJob/${job._id}`}>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
          </Link>
          
        
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={()=>{
            deleteJobMutation.mutate(job._id)
          }}>
            <Trash2 className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  )
}

