import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDataOfCourseApi } from "../CoursesApi";

const CourseCurriculum = () => {
  let { id } = useParams();
  //Data showing
  let { data, isLoading, Error } = useQuery({
    queryKey: ["course"],
    queryFn: () => getDataOfCourseApi(id),
  });
  if (isLoading) {
    <div>Data Loading...</div>;
  }
  if (Error) {
    <div>Some error loading data</div>;
  }
  let lectures = data?.data ? data.data.lessons : [];

  const [expandedLecture, setExpandedLecture] = useState(null);

  const toggleLecture = (index) => {
    setExpandedLecture(expandedLecture === index ? null : index);
  };

  return (
    <div className="py-2">
      <div className="max-w-4xl p-4">

        <div>
          {lectures.map((lecture, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden mb-4"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-150"
                onClick={() => toggleLecture(index)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {lecture.title}
                    </h3>
                    <p className="text-sm  flex items-center mt-1">
                      <PlayCircleIcon className="w-4 h-4 mr-1" />
                      45 minutes
                    </p>
                  </div>
                </div>
                <button className="text-HeroButtonOne focus:outline-none">
                  {expandedLecture === index ? (
                    <ChevronUpIcon className="w-6 h-6" />
                  ) : (
                    <ChevronDownIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
              {expandedLecture === index && (
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <p className="mb-4">{lecture.description}</p>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe
                      src={`http://localhost:8000${lecture.videoUrl}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
