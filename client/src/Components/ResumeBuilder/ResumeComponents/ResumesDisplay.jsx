import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cvImage from '../../../Assets/CvImage/cv.png';
import { FaEllipsisV } from 'react-icons/fa';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResumes } from '../ResumeApis/ResumeApi';
function ResumesDisplay({ resume }) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    //Api Calling for deleting the data 
    const deleteResumeMutations = useMutation({
      mutationFn:deleteResumes,
      onSuccess:()=>{
        queryClient.invalidateQueries("resumes");
        console.log('Resume deleted Successfully')
      },
      onError:()=>{
        console.log('Some error in deleting the resume')
      }
    })
    const handleOptionClick = (option) => {
        switch (option) {
            case 'edit':
                navigate(`/resume/${resume._id}/edit`);
                break;
            case 'view':
                navigate(`/resume/${resume._id}/view`);
                break;
            case 'download':
                break;
            case 'delete':
                deleteResumeMutations.mutate(resume._id)
                break;
            default:
                break;
        }
        setIsDropdownOpen(false);
    };

    return (
        <div>
            <div
                className='border-t-4 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 h-[220px] md:h-[240px] lg:h-[280px] w-full rounded-t-lg
                hover:scale-105 transition-all hover:shadow-md cursor-pointer flex justify-center items-center'
                onClick={() => navigate(`/resume/${resume._id}/edit`)} 
                style={{ borderColor: resume.themeColor }}
            >
                <img src={cvImage} alt="Cv" width={80} height={80} />
            </div>
            <div className='relative flex justify-between items-center p-3 border text-white rounded-b-lg shadow-lg' style={{ backgroundColor: resume.themeColor }}>
                <h1 className='font-semibold text-sm'>{resume.title}</h1>
                <div className="relative">
                    <FaEllipsisV size={12} onClick={handleDropdownToggle} className="cursor-pointer" />
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-10">
                            <ul className="py-1">
                                <li onClick={() => handleOptionClick('edit')} className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Edit</li>
                                <li onClick={() => handleOptionClick('view')} className="px-4 py-1 hover:bg-gray-100 cursor-pointer">View</li>
                                <li onClick={() => handleOptionClick('download')} className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Download</li>
                                <li onClick={() => handleOptionClick('delete')} className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Delete</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ResumesDisplay;
