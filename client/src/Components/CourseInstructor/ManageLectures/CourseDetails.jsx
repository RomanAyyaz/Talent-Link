import React from "react";
import { useDarkModeStore } from "../../../Store/DarkModeStore";

const CourseDetails = ({ courseData }) => {
  const { mode } = useDarkModeStore();

  /* ── dark-mode helpers ───────────────────────────── */
  const cardBg   = mode === "dark" ? "bg-dark"     : "bg-white";
  const textHead = mode === "dark" ? "text-white"  : "text-gray-800";
  const textSub  = mode === "dark" ? "text-gray-400" : "text-gray-600";
  const textMain = mode === "dark" ? "text-white"  : "font-medium";
  /* ───────────────────────────────────────────────── */

  return (
    <div className={`${cardBg} shadow-lg rounded-lg p-6`}>
      <h2 className={`text-2xl font-semibold mb-4 ${textHead}`}>Course Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className={textSub}>Course Name</p>
          <p className={textMain}>{courseData.title}</p>
        </div>

        <div>
          <p className={textSub}>Instructor</p>
          <p className={textMain}>{courseData.instructor}</p>
        </div>

        <div>
          <p className={textSub}>Total Lectures</p>
          <p className={textMain}>{courseData.totalLectures || courseData.duration}</p>
        </div>

        <div>
          <p className={textSub}>Duration</p>
          <p className={textMain}>{courseData.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
