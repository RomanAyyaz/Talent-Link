import React, { useState } from 'react'
import PersonalDetailForm from './ResumeForms/PersonalDetailForm'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Summery from './ResumeForms/Summery';
function FormSection() {
  const [activeFormIndex,setActiveFormIndex] = useState(1)
  return (
    <div>
      <div className='flex justify-between item-center px-2'>
        <button className='px-4 py-1 text-black border rounded-md'>Theme</button>
        <div className='flex gap-2'>
          {activeFormIndex>1 && <button className='bg-purple-600 text-center py-1 px-2 text-white rounded-md'
           onClick={()=>{setActiveFormIndex(activeFormIndex-1)}}> <HiOutlineArrowNarrowLeft size={25}/></button> }
          <button className='bg-purple-600 text-white px-4 py-1 rounded-md'
           onClick={()=>{setActiveFormIndex(activeFormIndex+1)}}>Next</button>
        </div>
      </div>
      {/* Personal Deatils */}
      {activeFormIndex == 1? <PersonalDetailForm/> :null}
      {/* Summary */}
      {activeFormIndex == 2 ? <Summery/> :null}
      {/* Experience */}

      {/* Education  */}

      {/* Skills */}
    </div>
  )
}

export default FormSection