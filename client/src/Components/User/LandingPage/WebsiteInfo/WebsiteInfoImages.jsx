import React from 'react'

function WebsiteInfoImages({ data }) {
    return (
        <div className='relative w-full lg:w-full lg:h-full hidden lg:block'>
            <img src={data.Image} alt=""  className=' lg:h-96 w-full h-auto object-cover' style={{ clipPath: 'polygon(0% 3%, 100% 70%, 100% 100%, 0 100%)' }} />
            <div >
                {data.websiteinfo}
            </div>
        </div>
    )
}

export default WebsiteInfoImages