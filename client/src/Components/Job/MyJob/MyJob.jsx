import React, { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { FaGreaterThan } from 'react-icons/fa';
import {useQuery} from "@tanstack/react-query"
import { getAllJobsApi } from '../JobApis';
import MyJobList from './MyJobList';
function MyJob() {
        const [isOpen, setIsOpen] = useState(false)
        const [selectedCategory, setSelectedCategory] = useState('All Category')
      
        const categories = [
          'All Category',
          'Technology',
          'Healthcare',
          'Finance',
          'Education',
          'Retail',
          'Manufacturing'
        ]
    let{data,isLoading,Error} = useQuery({
        queryKey:['jobs'],
        queryFn: getAllJobsApi
    })
    if(isLoading){
        <div>Data Loading...</div>
    } 
    if(Error){
        <div>Error in loading jobs data</div>
    }
    let jobData = data? data.jobData : []
    
  return (
 <div className='w-full px-3 md:px-7 bg-bgcompanyProfile border'>
    <div className='bg-bgwhite w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3 md:flex md:items-center justify-between'>
      <h1 className='text-lg text-InstructorPrimary font-bold'>All Job</h1>
      <div>
        <p className='inline-block text-sm text-neutral-500'>Job</p> 
        <p className='inline-block font-medium text-sm text-neutral-500 mx-1.5'><FaGreaterThan size={10}/></p>
        <p className='inline-block font-medium text-sm text-InstructorPrimary'>My Jobs</p>
      </div>
    </div>
    {/* search bar */}

    <div className="w-full max-w-6xl mx-auto px-4 py-2">
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Find Top Employer"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full sm:w-auto px-4 py-2 bg-white rounded-lg flex items-center justify-between gap-2 hover:bg-gray-200 transition-colors"
          >
            <span className="text-gray-700">{selectedCategory}</span>
            <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-full sm:w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setIsOpen(false)
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
 


    <div className=''>
        {
          jobData ? 
          jobData.map((job,index)=>{
            return (
             
                <MyJobList job = {job} key={index}/>
             
              
            )
          })
           : null
        }
      </div>
    
  </div>
  )
}

export default MyJob