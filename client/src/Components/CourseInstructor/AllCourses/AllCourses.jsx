import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { getAllCourses } from "../CourseApis";
import AllCoursesList from "./AllCoursesList";
import { useDarkModeStore } from "../../../Store/DarkModeStore";

function AllCourses() {
  const { mode } = useDarkModeStore();

  /* ── query ───────────────────────────────────────────── */
  const { data, isLoading, error } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });
  if (isLoading) return <h1>Loading…</h1>;
  if (error) return <h2>Error</h2>;

  const coursesData = data?.coursesData || [];

  /* ── dark-mode helpers ──────────────────────────────── */
  const outerClass = `
    w-full px-3 md:px-7 border
    ${mode === "light" ? "bg-bgcompanyProfile" : "bg-darkk"}
  `.trim();

  const headerCardClass = `
    ${mode === "light" ? "bg-bgwhite" : "bg-dark"}
    w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3
    md:flex md:items-center justify-between
  `.trim();

  const gridTextMuted = mode === "dark" ? "text-gray-300" : "text-neutral-500";
  /* ───────────────────────────────────────────────────── */

  return (
    <div className={outerClass}>
      {/* breadcrumb / title */}
      <div className={headerCardClass}>
        <h1 className="text-lg text-InstructorPrimary font-bold">All Course</h1>
        <div>
          <p className={`inline-block text-sm ${gridTextMuted}`}>Courses</p>
          <p
            className={`inline-block font-medium text-sm ${gridTextMuted} mx-1.5`}
          >
            <FaGreaterThan size={10} />
          </p>
          <p className="inline-block font-medium text-sm text-InstructorPrimary">
            All Course
          </p>
        </div>
      </div>

      {/* courses grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coursesData.map((course, idx) => (
          <AllCoursesList key={idx} courses={course} />
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
