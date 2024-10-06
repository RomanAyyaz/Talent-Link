import React from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function ResumesDisplay({resume}) {
    const navigate = useNavigate()
  return (
    <div className='border flex justify-center items-center p-14 bg-gray-100 py-24 h-[280px]
      rounded-lg hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed' 
       onClick={()=>
        navigate(`/resume/${resume._id}/edit`)
       } >
        </div>
  )
}

export default ResumesDisplay