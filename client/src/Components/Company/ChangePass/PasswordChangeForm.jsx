"use client"

import { useState } from "react"
import { chnageCompanyPassApi } from "../CompanyApi"
import {useMutation} from '@tanstack/react-query'
import { useCompanyIdStore } from "../../../Store/CompanyIdStore";

export default function PasswordChangeForm() {
  const { companyId } = useCompanyIdStore();

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [retypePassword, setRetypePassword] = useState("")
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  //Api for changing the password 

  const changeComPass = useMutation({
      mutationFn: chnageCompanyPassApi,
      onSuccess: () => {
        console.log("Password changed successfully Successfully");
      },
      onError: () => {
        console.log("Some error in Changing the password");
      },
    });
  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPassword !== retypePassword) {
      setPasswordsMatch(false)
      return
    }
    setPasswordsMatch(true)
    changeComPass.mutate({id : companyId , password : currentPassword , newPassword : newPassword})
    console.log("Password update submitted")
  }

  return (
    <div className="min-h-screen bg-[#faf5f5] flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Change Password</h1>

      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Change Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="current-password" className="block text-lg font-medium text-gray-900 mb-2">
              Current Password
            </label>
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
                id="current-password"
                type="password"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                placeholder="Enter your current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="new-password" className="block text-lg font-medium text-gray-900 mb-2">
              New password
            </label>
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
                id="new-password"
                type="password"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                placeholder="Enter your New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="retype-password" className="block text-lg font-medium text-gray-900 mb-2">
              Retype password
            </label>
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
                id="retype-password"
                type="password"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                placeholder="Enter your Retype password"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
                required
              />
            </div>
            {!passwordsMatch && <p className="mt-2 text-sm text-red-600">Passwords do not match</p>}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

