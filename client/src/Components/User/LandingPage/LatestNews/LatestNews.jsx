import React from 'react'
import News from './News'
function LatestNews() {
    let NewsInfo = [
        {
            Date: 'July 30,2024',
            title: '5 Theoretical Physicists That You Will Follow'
        },
        {
            Date: 'August 3,2024',
            title: '14 Things You Do Not Know about Cs Degree'
        },
        {
            Date: 'August 14,2024',
            title: 'The Creation of JavaScript'
        }
    ]
  return (
    <div className='md:flex md:w-full md:py-14'>
        <div className='px-5 lg:px-8 text-start py-12 md:py-16 md:w-1/2'>
            <h1 className='font-bold text-xl mt-2 md:text-4xl md:leading-[50px] lg:w-[400px] lg:leading-[65px] lg:text-6xl lg:py-16'>Check On the Latest News</h1>
        </div>
        <div className='hidden lg:block h-[480px] bg-black w-[1px]'></div>
        <div className='py-6 md:w-1/2 lg:px-16'>
            {
                NewsInfo.map((values,index)=>{
                    return (
                        <News data = {values} key= {index}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default LatestNews