import React from 'react'

function News({data}) {
  return (
    <div className='text-start px-5 my-10'>
        <p className='font-medium text-sm'>{data.Date}</p>
        <h1 className='font-semibold text-2xl my-3 hover:cursor-pointer hover:text-HeroButtonOne'>{data.title}</h1>
        <div className='h-[1px] bg-HeroButtonOne w-20'></div>
    </div>
  )
}

export default News