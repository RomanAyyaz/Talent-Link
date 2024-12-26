import React from 'react'

export default function AllJobslist() {
  return (
    <div className="w-full md:w-1/2 md:h-2/5 rounded-md border border-gray-300 bg-white p-6 shadow-sm text-start">
      {/* Logo */}
      <div className="mb-6 h-16 w-16 rounded-lg bg-gray-100 p-4">
        <div className="grid grid-cols-2 gap-1">
          <div className="h-3 w-3 rounded-sm bg-red-500"></div>
          <div className="h-3 w-3 rounded-sm bg-green-500"></div>
          <div className="h-3 w-3 rounded-sm bg-blue-500"></div>
          <div className="h-3 w-3 rounded-sm bg-yellow-500"></div>
        </div>
      </div>

      {/* Location and Job Type */}
      <div className="mb-4 flex items-center gap-4 text-gray-600">
        <div className="flex items-center gap-2">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm">Newyork, USA</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm">Full Time</span>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">
        Software Engineer, Bing
      </h2>

      {/* Description */}
      <p className="mb-6 text-gray-600">
        Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio
        officiis odit mollitia eum ipsum.
      </p>

      {/* Tags */}
      <div className="flex gap-2">
        <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600">
          React
        </span>
        <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600">
          Javascript
        </span>
        <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600">
          Web UI
        </span>
      </div>

    </div>
  )
}