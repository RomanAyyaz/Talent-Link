import React from 'react';
import Header from './Header';
import CourseDetails from './CourseDetails';
import AddLectureForm from './AddLectureForm';
import LectureList from './LectureList';
import { useQuery } from '@tanstack/react-query';
import { getDataOfCourseApi } from '../CourseApis';
import { useParams } from 'react-router-dom';
import { useDarkModeStore } from '../../../Store/DarkModeStore';

const ManageLectures = () => {
  const { mode } = useDarkModeStore();
    const {id} = useParams();
    //Api Calling for getting all the courses
    const { data, isLoading, error } = useQuery({
      queryKey: ["courses",id],
      queryFn: () => getDataOfCourseApi(id),
    });
    if(isLoading) {
      <h1>Loading....</h1>
    }
    if(error) {
      <h2>error</h2>
    }
    let courseData = data?.data || []
    console.log('courses data in compnay',courseData)
  return (
    <div className={` container mx-auto px-3 md:px-8 border ${mode === 'light' ? 'bg-bgcompanyProfile' :'bg-darkk'}`}>
      <Header/>
      <div className="mt-8">
        <CourseDetails courseData={courseData} />
      </div>
      <div className="mt-8">
        <AddLectureForm  />
      </div>
      <div className="mt-8">
        <LectureList courseData={courseData} />
      </div>
    </div>
  );
};

export default ManageLectures;

