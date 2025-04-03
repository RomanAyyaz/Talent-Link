"use client"

import { useState } from "react"

export default function ComPackages() {
  const [billingCycle, setBillingCycle] = useState("monthly") // "monthly" or "yearly"
  const [selectedPackage, setSelectedPackage] = useState("basic")

  const handleBillingToggle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
  }

  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName)
  }

  return (
    <div className="min-h-screen bg-[#faf5f5] p-6">
      {/* Pricing Plan Header */}
      <div className="max-w-7xl mx-auto">

        
        {/* Your Packages Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-start">Your Packages</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Package */}
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <button
                    onClick={() => handlePackageSelect("basic")}
                    className={`w-6 h-6 rounded-full mr-4 ${
                      selectedPackage === "basic" ? "bg-green-500" : "border-2 border-gray-300"
                    }`}
                  />
                  <h3 className="text-xl font-bold text-gray-900">Basic</h3>
                </div>
                <p className="text-gray-600">10 job posted out of 40, listed for 10 days</p>
              </div>

              {/* Premium Package */}
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <button
                    onClick={() => handlePackageSelect("premium")}
                    className={`w-6 h-6 rounded-full mr-4 ${
                      selectedPackage === "premium" ? "bg-green-500" : "border-2 border-gray-300"
                    }`}
                  />
                  <h3 className="text-xl font-bold text-gray-900">Premium</h3>
                </div>
                <p className="text-gray-600">10 job posted out of 40, listed for 10 days</p>
              </div>
            </div>
          </div>
        </div>


        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Pricing Plan</h1>
          <div className="flex items-center gap-3">
            <span className={`text-lg ${billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={handleBillingToggle}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-green-500"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
                  billingCycle === "yearly" ? "translate-x-9" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"}`}>Yearly</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Free Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-medium text-green-500 mb-2">Free</h3>
            <div className="flex items-end mb-6">
              <span className="text-6xl font-bold text-gray-900">{billingCycle === "monthly" ? "Free" : "Free"}</span>
              <span className="text-xl text-gray-500 ml-2 mb-1">
                /{billingCycle === "monthly" ? "Month" : "Yearly"}
              </span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">Unlimited access to 100+ Job</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">10+ Featured job</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">Job duration for 30 days</span>
              </li>
              <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 text-lg">Get 10+ Jobs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 text-lg">Try For Free</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 text-lg">Individual Job</span>
                </li>
            </ul>

            <button className="w-full py-3 px-4 border border-green-500 text-green-500 font-medium rounded-md hover:bg-green-50 transition-colors">
              Get Started Now
            </button>
          </div>

          {/* Basic Plan */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-medium text-green-500 mb-2">Basic</h3>
            <div className="flex items-end mb-6">
              <span className="text-6xl font-bold text-gray-900">{billingCycle === "monthly" ? "99" : "399"}$</span>
              <span className="text-xl text-gray-500 ml-2 mb-1">
                /{billingCycle === "monthly" ? "Month" : "Yearly"}
              </span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">Unlimited access to 100+ Job</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">10+ Featured job</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">Job duration for 30 days</span>
              </li>
              <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 text-lg">Get 10+ Jobs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 text-lg">Try For Free</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 text-lg">Individual Job</span>
                </li>
            </ul>

            <button className="w-full py-3 px-4 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors">
              Get Started Now
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-medium text-green-500 mb-2">Standard</h3>
            <div className="flex items-end mb-6">
              <span className="text-6xl font-bold text-gray-900">{billingCycle === "monthly" ? "199" : "599"}$</span>
              <span className="text-xl text-gray-500 ml-2 mb-1">
                /{billingCycle === "monthly" ? "Month" : "Yearly"}
              </span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">Unlimited access to 100+ Job</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">10+ Featured job</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">Job duration for 30 days</span>
              </li>
              <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 text-lg">Get 10+ Jobs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 text-lg">Try For Free</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 text-lg">Individual Job</span>
                </li>
            </ul>

            <button className="w-full py-3 px-4 border border-green-500 text-green-500 font-medium rounded-md hover:bg-green-50 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

