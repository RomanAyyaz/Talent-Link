// import React, { useEffect, useState } from 'react'
// import ImageOne from '../../../../Assets/HeroSectionImages/imageOne.jpg'
// import ImageTwo from '../../../../Assets/HeroSectionImages/Image.jpg'
// function HeroSection() {
//     let [Current , SetCurrent] = useState(0)
//     let Images= [ImageOne,ImageTwo]
//     //Images Slider function
//     const next = () => {
//         SetCurrent((prevCurrent) => (prevCurrent + 1) % Images.length)
//     }
//     // useEffect(()=>{
//     //     const interval = setInterval(() => {
//     //         next()
//     //     }, 7000)

//     //     return () => clearInterval(interval)
//     // },[Current])
//   return (
//     <div className=' max-w-full md:h-auto'>
//         <img src={Images[Current]} alt="HeroPage" className='w-full h-[500px] lg:h-[650px]  md:h-full object-cover' />
//         <div className='absolute top-64 w-full px-4 py-3 text-white'>
//             <p className='m-2 text-xl'>We believe in </p>
//             {
//                 Current === 0 ?<>
//                 <h1 className='text-5xl font-bold hidden lg:block'>Passion for Learning</h1>
//                 <h1 className='text-5xl font-bold m-2 lg:hidden'>Passion For</h1>
//                 <h1 className='text-5xl font-bold m-2 lg:hidden'>Learning</h1>
//                 </>
//                 : <h1 className='text-5xl font-bold m-2 leading-[60px]'>LifeLong Learning</h1>
//             }
//             <p className='m-4'>and Edulogy is a great tool to learn!</p>
//             <button className='rounded-md bg-bgNavbar py-1 px-3 lg:py-2 lg:px-5 lg:mt-5'>Explore with us</button>
//             <p className='inline-block mx-2 lg:mx-4' >or</p>
//             <button className='rounded-md bg-HeroButtonOne py-1 px-3 lg:py-2 lg:px-5'>Demo Test</button>
//         </div>
//         <div className='absolute top-[580px] lg:top-[680px] left-3'>
//          <div className='flex items-center justify-center gap-2'>
//     {Images.map((_, i) => (
//         <div
//             key={i}
//             className={`transition-all w-2 h-2 bg-white rounded-full ${Current === i ? 'p-1' : 'bg-opacity-50'}`}
//         />
//     ))}
// </div>
// </div>
//     </div>
//   )
// }

// export default HeroSection