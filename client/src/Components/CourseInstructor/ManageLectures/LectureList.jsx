import React from "react";
import { deleteLessonApi } from "../CourseApis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useDarkModeStore } from "../../../Store/DarkModeStore";

const LectureList = ({ courseData }) => {
  const queryClient = useQueryClient();
  const { mode } = useDarkModeStore();
  // Course Id
  const { id } = useParams();

  // Api to delete the lecture
  const deleteLessonMutation = useMutation({
    mutationFn: deleteLessonApi,
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
      console.log("Lesson deleted Successfully");
    },
    onError: () => console.log("Some error in deleting the Lesson"),
  });

  /* ── dark-mode helpers ──────────────────────────── */
  const cardBg     = mode === "dark" ? "bg-dark"     : "bg-white";
  const headText   = mode === "dark" ? "text-white"  : "text-gray-800";
  const subText    = mode === "dark" ? "text-gray-400" : "text-gray-600";
  const headerRow  = mode === "dark" ? "bg-gray-700" : "bg-gray-100";
  const borderRow  = mode === "dark" ? "border-gray-700" : "border-b";
  /* ──────────────────────────────────────────────── */

  return (
    <div className={`${cardBg} shadow-lg rounded-lg p-6`}>
      <h2 className={`text-2xl font-semibold mb-4 ${headText}`}>Lecture List</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={headerRow}>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Duration</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {courseData.lessons
              ? courseData.lessons.map((lecture) => (
                  <tr key={lecture.id} className={borderRow}>
                    <td className={`px-4 py-2 text-left ${subText}`}>{lecture.title}</td>
                    <td className={`px-4 py-2 text-left ${subText}`}>1:00</td>
                    <td className="px-4 py-2 text-left">
                      <button
                        onClick={() =>
                          deleteLessonMutation.mutate({
                            values: lecture._id,
                            id: id,
                          })
                        }
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LectureList;
