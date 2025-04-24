import React from 'react';
import { MapPin, Clock, Edit2, Eye, Trash2 } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteJobApi } from '../JobApis';
import { Link } from 'react-router-dom';
import { useDarkModeStore } from '../../../Store/DarkModeStore';

export default function MyJobList({ job }) {
  const queryClient = useQueryClient();
  const { mode } = useDarkModeStore();

  const deleteJobMutation = useMutation({
    mutationFn: deleteJobApi,
    onSuccess: () => {
      queryClient.invalidateQueries('jobs');
      console.log('Job delete SuccessFully');
    },
    onError: () => {
      console.log('Some error in deleting the job');
    },
  });

  /* ── Dark-mode helpers ─────────────────────────────────────────────── */
  const cardClass = `
    ${mode === 'light' ? 'bg-white' : 'bg-dark'}
    rounded-lg shadow-md p-6
  `.trim();

  const titleClass = `
    text-2xl font-bold
    ${mode === 'dark' ? 'text-white' : 'text-gray-900'}
  `.trim();

  const mutedTextClass = `
    ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}
  `.trim();

  const badgeMutedClass = `
    inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
    ${mode === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}
  `.trim();

  const statusBadgeClass = `
    px-3 py-1 rounded-full text-sm font-medium
    ${mode === 'dark' ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}
  `.trim();

  const actionBtnClass = `
    p-2 rounded-full transition-colors
    ${mode === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
  `.trim();
  /* ─────────────────────────────────────────────────────────────────── */

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className={cardClass}>
        {/* header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className={titleClass}>{job.jobTitle}</h2>
          <div className="flex items-center gap-2">
            <span className={badgeMutedClass}>1 Applied</span>
          </div>
        </div>

        {/* location & type */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className={`flex items-center gap-2 ${mutedTextClass}`}>
            <MapPin className="w-5 h-5" />
            <span>{job.location}</span>
          </div>
          <div className={`flex items-center gap-2 ${mutedTextClass}`}>
            <Clock className="w-5 h-5" />
            <span>{job.employmentType}</span>
          </div>
        </div>

        {/* posted / deadline / status */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className={`flex flex-col sm:flex-row gap-4 text-sm ${mutedTextClass}`}>
            <span>Job Posted: 1 month ago</span>
            <span>Job deadline: May 10 2024</span>
          </div>
          <span className={statusBadgeClass}>Pending</span>
        </div>

        {/* actions */}
        <div className="flex gap-4 justify-start">
          <Link to={`/dashboardCompany/editJob/${job._id}`}>
            <button className={actionBtnClass}>
              <Edit2 className="w-5 h-5 text-gray-600" />
            </button>
          </Link>

          <Link to={`/dashboardCompany/manageJob/${job._id}`}>
            <button className={actionBtnClass}>
              <Eye className="w-5 h-5 text-gray-600" />
            </button>
          </Link>

          <button
            className={actionBtnClass}
            onClick={() => deleteJobMutation.mutate(job._id)}
          >
            <Trash2 className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
