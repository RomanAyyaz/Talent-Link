"use client"

import { useState } from "react"
import { useMutation } from '@tanstack/react-query'
import { deleteCompanyApi } from "../CompanyApi"
import { useCompanyIdStore } from "../../../Store/CompanyIdStore"
import { Navigate } from "react-router-dom"
import { useDarkModeStore } from "../../../Store/DarkModeStore"

export default function DeleteProfile() {
  const [password, setPassword] = useState("")
  const { companyId } = useCompanyIdStore();
  const id = companyId
  const { mode } = useDarkModeStore();

  const deleteCompanyMutations = useMutation({
    mutationFn: deleteCompanyApi,
    onSuccess: () => {
      Navigate("/");
      console.log('The company has been deleted successfully')
    },
    onError: () => {
      console.log('There is some error in deleting the company ')
    }
  })

  const handleCancel = () => {
    console.log("Delete profile cancelled")
  }

  const handleDelete = (e) => {
    e.preventDefault()
    deleteCompanyMutations.mutate({ id: id, password: password })
    console.log("Delete profile confirmed with password:", password)
  }

  return (
    <div className={`min-h-screen ${mode === 'light' ? 'bg-[#faf5f5]' : 'bg-darkk'} flex flex-col items-start p-4`}>
      <h1 className={`text-3xl font-bold mb-6 ${mode === 'light' ? 'text-gray-900' : 'text-white'}`}>Delete Profile</h1>

      <div className={`rounded-lg shadow-md w-full max-w-4xl p-6 md:p-8 ${mode === 'light' ? 'bg-white' : 'bg-dark'}`}>
        <div className="flex flex-col items-center justify-center py-12 px-4">
          <h2 className={`text-2xl font-bold text-center mb-6 ${mode === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Are you sure! You want to delete your profile.
          </h2>

          <p className={`text-lg mb-4 ${mode === 'light' ? 'text-gray-900' : 'text-white'}`}>Please Enter Your Login Password</p>

          <form onSubmit={handleDelete} className="w-full max-w-md">
            <div className="mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  className={`block w-full pl-10 pr-3 py-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400
                  ${mode === 'light' ? 'bg-white text-gray-500 border border-gray-300' : 'bg-dark text-gray-300 border border-gray-600'}`}
                  placeholder="Enter your current password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
              >
                Delete Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
