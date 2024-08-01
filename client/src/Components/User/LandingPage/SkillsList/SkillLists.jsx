import React from 'react'
import { FaCode, FaBriefcase, FaPalette, FaMusic, FaUserGraduate, FaBullhorn, FaCamera, FaLeaf } from 'react-icons/fa';
import Skills from './Skills';
function SkillLists() {
    let SkillsList = [
        {
            gif: <FaCode size={30} />,
           para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium ut asperiores, ipsum veritatis.',
           name:'Development'
        },
        {
            gif: <FaBriefcase size={30}/>,
            para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium ut asperiores, ipsum veritatis.',
            name:'Business'
         },
         {
            gif: <FaPalette size={30} />,
            para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium ut asperiores, ipsum veritatis.',
            name:'Design'
         },
         {
            gif: <FaMusic size={30} />,
            para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium ut asperiores, ipsum veritatis.',
            name:'Music'
         },
         {
            gif: <FaUserGraduate size={30} />,
            para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium ut asperiores, ipsum veritatis.',
            name:'Personal'
         },
         {
            gif: <FaBullhorn size={30} />,
            para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium ut asperiores, ipsum veritatis.',
            name:'Marketing'
         },
         {
            gif: <FaCamera size={30} />,
            para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium ut asperiores, ipsum veritatis.',
            name:'Photography'
         },
         {
            gif: <FaLeaf size={30}/>,
            para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium ut asperiores, ipsum veritatis.',
            name:'LifeStyle'
         },
    ]
  return (
    <div className='bg-bgSkills py-32 px-3 flex justify-center flex-wrap'>
     {
        SkillsList.map((values,index)=>{
            return (
                <div className="w-full md:w-1/2 lg:w-1/4" key={index}>
                <Skills data={values} />
                </div>
            )
        })
     }
    </div>
  )
}

export default SkillLists