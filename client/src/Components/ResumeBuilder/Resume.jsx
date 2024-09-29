import React from 'react'
import AddResume from './ResumeComponents/AddResume'

function Resume() {
  return (
    <div className='p-10 md:px-20 lg:px-32 text-start'>
        <h2 className='font-bold text-3xl'>My Resume</h2>
        <p className='mt-1'>Strat Creating AI resume to your next job</p>
        <div className='flex w-full mt-4'>
            <div className='w-1/5'><AddResume/></div>
        </div>
    </div>
  )
}

export default Resume