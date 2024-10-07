import React from 'react';
import { useNavigate } from 'react-router-dom';
import cvImage from '../../../Assets/CvImage/cv.png'
function ResumesDisplay({ resume }) {
    const navigate = useNavigate();

    return (
      <div>
        <div
            className='border-t-4 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 h-[220px] md:h-[240px] lg:h-[280px] w-full rounded-lg
            hover:scale-105 transition-all hover:shadow-md cursor-pointer flex justify-center items-center'
            onClick={() => navigate(`/resume/${resume._id}/edit`)} 
            style={{borderColor:resume.themeColor}}
        >
          <img src={cvImage} alt="Cv" width = {80} height = {80} />
        </div>
        <h1 className='text-center font-semibold text-sm mt-1'>{resume.title}</h1>
      </div>
    );
}

export default ResumesDisplay;
