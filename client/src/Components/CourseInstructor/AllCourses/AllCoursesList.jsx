import { Heart, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourseApi } from "../CourseApis";
import { useDarkModeStore } from "../../../Store/DarkModeStore";

export default function AllCoursesList({ courses }) {
  const queryClient = useQueryClient();
  const { mode } = useDarkModeStore();

  /* ── delete mutation ─────────────────────────────── */
  const deleteCourse = useMutation({
    mutationFn: deleteCourseApi,
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
      console.log("Course deleted successfully");
    },
    onError: () => console.log("Some error in deleting the course"),
  });

  /* ── dark-mode helpers ───────────────────────────── */
  const cardClass = `
    overflow-hidden rounded-lg shadow-md
    ${mode === "dark" ? "bg-dark" : "bg-white"}
  `.trim();

  const titleClass = `
    text-xl font-bold
    ${mode === "dark" ? "text-white" : "text-gray-800"}
  `.trim();

  const mutedText = mode === "dark" ? "text-gray-400" : "text-gray-600";
  const borderRow = `pb-4 border-b ${mode === "dark" ? "border-gray-700" : "border-gray-200"}`;
  /* ───────────────────────────────────────────────── */

  return (
    <div className={cardClass}>
      {/* image */}
      <div className="relative h-56">
        <img
          src={`http://localhost:8000/public${courses.imageUrl}`}
          alt={courses.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* content */}
      <div className="p-6 space-y-4">
        <h2 className={titleClass}>{courses.title}</h2>

        {/* date & likes */}
        <div className={`flex justify-between items-center ${borderRow}`}>
          <p className={mutedText}>April 23</p>
          <div className={`flex items-center gap-1 ${mutedText}`}>
            <Heart className="w-5 h-5" />
            <span>450</span>
          </div>
        </div>

        {/* details */}
        <div className="space-y-4">
          <div className={`flex justify-between items-center ${borderRow}`}>
            <span className={mutedText}>Duration :</span>
            <span className={mode === "dark" ? "text-white" : "text-gray-800"}>
              {courses.duration} Months
            </span>
          </div>

          <div className={`flex justify-between items-center ${borderRow}`}>
            <span className={mutedText}>Professor :</span>
            <span className={mode === "dark" ? "text-white" : "text-gray-800"}>
              {courses.instructor}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <span className={mutedText}>Student</span>
            </div>
            <span className="font-medium text-blue-500">+120</span>
          </div>
        </div>

        {/* buttons */}
        <div className="flex gap-2">
          <Link to={`/dashboardCompany/manage-Lecture/${courses._id}`}>
            <button className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-2">
              Edit
            </button>
          </Link>

          <button
            className="py-2 px-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors mt-2"
            onClick={() => deleteCourse.mutate(courses._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
