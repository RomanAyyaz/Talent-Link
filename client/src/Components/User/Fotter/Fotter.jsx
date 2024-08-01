import React from 'react'
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaTwitter
 } from "react-icons/fa";
function Fotter() {
  return (
    <div className='bg-bgFooter py-8'>
        <div className='flex flex-wrap justify-center items-center px-3 py-1'>
            <div className='group flex items-center hover:cursor-pointer hover:bg-facebook hover:text-white h-6 px-1'>
                <FaFacebookF size={14} />
                <p className='text-neutral-500 group-hover:text-white mx-2.5 font-medium'>Facebook</p>
            </div>
            <div className='group flex items-center ml-6 hover:cursor-pointer hover:bg-twitter hover:text-white h-6 px-1'>
                <FaTwitter size={14} />
                <p className='text-neutral-500 group-hover:text-white mx-2.5 font-medium'>Twitter</p>
            </div>
            <div className='group flex items-center ml-6 hover:cursor-pointer hover:bg-instagram hover:text-white h-6 px-1'>
                <FaInstagram size={14} />
                <p className='text-neutral-500 mx-2.5 group-hover:text-white font-medium'>Instagram</p>
            </div>
            <div className='group flex items-center my-3 lg:ml-6 hover:cursor-pointer hover:bg-youtube hover:text-white h-6 px-1'>
                <FaYoutube size={14} />
                <p className='text-neutral-500 mx-2.5 font-medium group-hover:text-white'>Youtube</p>
            </div>
        </div>
        <p className='text-sm my-5 text-gray-500'>CopyRight @ 2024-2025 Team AR</p>
    </div>
  )
}

export default Fotter