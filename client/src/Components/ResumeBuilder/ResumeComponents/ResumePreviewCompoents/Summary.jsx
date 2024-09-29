import React from 'react'

function Summary({resumeInfo}) {
  return (
    <div className='text-sm'>
        {resumeInfo.summery}
    </div>
  )
}

export default Summary