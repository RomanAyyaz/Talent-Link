import React from 'react';
import Header from './Header';
import CourseDetails from './CourseDetails';
import AddLectureForm from './AddLectureForm';
import LectureList from './LectureList';
import { useCourseIdStore } from '../../../Store/CourseIdStore';
import { useQuery } from '@tanstack/react-query';
import { getDataOfCourseApi } from '../CourseApis';

const ManageLectures = () => {
    const { courseId} = useCourseIdStore();
    //Api Calling for getting all the resumes 
    const { data, isLoading, error } = useQuery({
      queryKey: ["courses",courseId],
      queryFn: () => getDataOfCourseApi(courseId),
    });
    if(isLoading) {
      <h1>Loading....</h1>
    }
    if(error) {
      <h2>error</h2>
    }
    let courseData = data?.data || []
  // Mock data for demonstration
  const course = {
    name: 'Introduction to React',
    instructor: 'John Doe',
    totalLectures: 10,
    duration: '10 hours',
  };

  const lectures = [
    { id: 1, title: 'React Basics', duration: '1 hour' },
    { id: 2, title: 'Components and Props', duration: '1.5 hours' },
    { id: 3, title: 'State and Lifecycle', duration: '2 hours' },
  ];

  

  const handleDeleteLecture = (lectureId) => {
    console.log('Lecture deleted:', lectureId);
    // Implement the logic to delete a lecture
  };

  return (
    <div className="bg-bgcompanyProfile container mx-auto px-3 md:px-8 border">
      <Header/>
      <div className="mt-8">
        <CourseDetails courseData={courseData} />
      </div>
      <div className="mt-8">
        <AddLectureForm  />
      </div>
      <div className="mt-8">
        <LectureList lectures={lectures} onDeleteLecture={handleDeleteLecture} />
      </div>
    </div>
  );
};

export default ManageLectures;

