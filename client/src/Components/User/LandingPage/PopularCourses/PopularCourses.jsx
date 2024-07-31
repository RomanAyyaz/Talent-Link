import React from 'react'

function PopularCourses() {
  return (
    <div className='mt-3 bg-bgNavbar w-full h-96 py-16 lg:py-20 text-white'>
        <h1 className='lg:font-extrabold font-bold text-3xl lg:text-5xl'>Popular Courses</h1>
        <div className='h-[1px] bg-HeroButtonOne w-24 my-12 mx-auto'></div>
        <p className='px-8 md:px-28 lg:hidden tracking-wider leading-7 font-medium'>Aspire and Accomplish! Find your interests by browsing our online courses. Upgrade your skills, level up in life.
        Courses from €9.99 ends July 14.</p>
        <p className='font-medium leading-7 tracking-wider hidden lg:block'>Aspire and Accomplish! Find your interests by browsing our online</p>
        <p className='font-medium leading-7 tracking-wider hidden lg:block'>courses. Upgrade your skills, level up in life.</p>
        <p className='font-medium leading-7 tracking-wider hidden lg:block'>Courses from €9.99 ends July 14.</p>
    </div>
  )
}

export default PopularCourses