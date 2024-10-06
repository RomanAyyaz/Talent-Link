import React, { useState } from 'react';
import PersonalDetailForm from './ResumeForms/PersonalDetailForm';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Summery from './ResumeForms/Summery';
import ExperienceForm from './ResumeForms/ExperienceForm';
import EducationForm from './ResumeForms/EducationForm';
import SkiilsForm from './ResumeForms/SkiilsForm';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeThemeApi } from '../ResumeApis/ResumeApi';

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const queryClient = useQueryClient();
   // Extracting id from the URL
   let { id } = useParams();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const resumeColors = [
    "#34495E", // Midnight Blue
    "#2C3E50", // Dark Slate
    "#2980B9", // Strong Blue
    "#16A085", // Aqua Green
    "#27AE60", // Emerald Green
    "#8E44AD", // Deep Purple
    "#D35400", // Rich Orange
    "#E74C3C", // Soft Red
    "#F39C12", // Warm Yellow
    "#F4D03F", // Bright Yellow
    "#7F8C8D", // Grayish Slate
    "#95A5A6", // Light Gray
    "#BDC3C7", // Silver Gray
    "#5D6D7E", // Steel Blue
    "#1ABC9C", // Turquoise Green
  ];

  //Api calling for theme change 
  const changeThemeMutation = useMutation({
    mutationFn: ChangeThemeApi,
    onSuccess: () => {
      queryClient.invalidateQueries("resumes");
      console.log("Theme changed Successfully");
    },
    onError: () => {
      console.log("Some error in changing theme ");
    },
  });
  return (
    <div>
      <div className="relative flex justify-between item-center px-2">
        <button
          className="px-4 py-1 text-black border rounded-md"
          onClick={openModal}
        >
          Theme
        </button>

        {/* Modal positioned below the button */}
        {isOpen && (
          <div className="absolute left-0 mt-10 bg-white rounded-lg p-6 w-64 shadow-lg z-10">
            <div className="flex justify-between items-center">
              <h2 className="text-sx font-semibold">Theme Options</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              {resumeColors.map((key,index)=>{
                return (
                  <div className='w-6 h-6 rounded-full cursor-pointer' style={{backgroundColor:key}}
                  onClick={() => changeThemeMutation.mutate({ themeColor: key , id })}
  ></div>
                )
              })}
            </div>
          </div>
        )}

        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <button
              className="bg-purple-600 text-center py-1 px-2 text-white rounded-md"
              onClick={() => {
                setActiveFormIndex(activeFormIndex - 1);
              }}
            >
              <HiOutlineArrowNarrowLeft size={25} />
            </button>
          )}
          {activeFormIndex < 5 && (
            <button
              className="bg-purple-600 text-white px-4 py-1 rounded-md"
              onClick={() => {
                setActiveFormIndex(activeFormIndex + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* Personal Details */}
      {activeFormIndex === 1 ? <PersonalDetailForm /> : null}
      {/* Summary */}
      {activeFormIndex === 2 ? <Summery /> : null}
      {/* Experience */}
      {activeFormIndex === 3 ? <ExperienceForm /> : null}
      {/* Education */}
      {activeFormIndex === 4 ? <EducationForm /> : null}
      {/* Skills */}
      {activeFormIndex === 5 ? <SkiilsForm /> : null}
    </div>
  );
}

export default FormSection;
