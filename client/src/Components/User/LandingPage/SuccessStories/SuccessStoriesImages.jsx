import React from 'react'

function SuccessStoriesImages({ data }) {
    return (
        <div className='relative w-full lg:w-full hidden lg:block'>
            <img src={data.Image}
          alt="InterviewImage"
          className="w-full h-auto object-cover" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }} />
            <div >
                {data.successstories}
            </div>
        </div>
    )
}

export default SuccessStoriesImages