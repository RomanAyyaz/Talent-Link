import React from 'react';
import { deleteLessonApi } from '../CourseApis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCourseIdStore } from '../../../Store/CourseIdStore';

const LectureList = ({ courseData }) => {
  const queryClient = useQueryClient();
   //Course Id
   const { courseId} = useCourseIdStore();
  //Api to delete the lecture 
  const deleteLessonMutation = useMutation({
    mutationFn:deleteLessonApi,
    onSuccess:()=>{
      queryClient.invalidateQueries("courses");
      console.log('Lesson deleted Successfully')
    },
    onError:()=>{
      console.log('Some error in deleting the Lesson')
    }
  })
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Lecture List</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Duration</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              courseData.lessons? 
              courseData.lessons.map((lecture) => (
                <tr key={lecture.id} className="border-b">
                  <td className="px-4 text-left py-2">{lecture.title}</td>
                  <td className="px-4 py-2 text-left">1:00</td>
                  <td className="px-4 py-2 text-left">
                    <button
                    onClick={()=>{
                      deleteLessonMutation.mutate({values:lecture._id ,id:courseId})
                    }}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )): ""
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LectureList;

