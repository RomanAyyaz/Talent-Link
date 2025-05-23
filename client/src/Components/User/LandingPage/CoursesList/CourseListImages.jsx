import React from 'react'

function CourseListImages({data}) {
  return (
    <div className='relative my-4 cursor-pointer'>
        <img src={data.Image} alt="" className={ `lg:w-64 lg:h-64`} />
        <div className='absolute bg-white p-4 w-48 bottom-6 left-1/2 transform -translate-x-1/2 text-center text-md font-medium'>
            {data.courselist}
        </div>
    </div>
  )
}

export default CourseListImages