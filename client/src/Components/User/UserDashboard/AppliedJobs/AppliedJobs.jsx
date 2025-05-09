import { MapPin, Briefcase, Clock, Edit, Eye, Trash } from "lucide-react"
import { Link } from "react-router-dom"

const AppliedJobs = ({jobData}) => {
  return (
  // <>hello
  // </>
    <div className="max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{jobData.jobId.jobTitle}</h2>

      <div className="flex flex-wrap gap-6 mb-6">
        <div className="flex items-center text-gray-500">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{jobData.jobId.location}</span>
        </div>

        <div className="flex items-center text-gray-500">
          <Briefcase className="w-5 h-5 mr-2" />
          <span>Full Time</span>
        </div>

        <div className="flex items-center text-gray-500">
          <Clock className="w-5 h-5 mr-2" />
          <span>1 Year Ago</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <span className="px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-md">Creative</span>
        <span className="px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-md">User Interface</span>
        <span className="px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-md">Web UI</span>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="p-3 text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
          <Edit className="w-5 h-5" />
        </button>
        <Link to={`/UserDashboard/pipeline/${jobData.jobId._id}`}> 
        <button className="p-3 text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
          <Eye className="w-5 h-5" />
        </button>
        </Link>
        <button className="p-3 text-red-500 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
          <Trash className="w-5 h-5" />
        </button>
        <span className="px-4 py-2 text-green-600 bg-green-50 rounded-md">Pending</span>
      </div>
    </div>
    
  )
}

export default AppliedJobs

