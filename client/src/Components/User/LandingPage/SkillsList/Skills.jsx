import React from 'react'

function Skills({data}) {
  return (
    <div className='bg-bgwhite text-start my-2.5 mx-1 px-4 S py-8 lg:h-72'>
        <p className='text-HeroButtonOne'>{data.gif}</p>
        <p className='font-bold my-3 text-xl'>{data.name}</p>
        <p className='lg:w-48 text-neutral-500'>{data.para}</p>
    </div>
  )
}

export default Skills