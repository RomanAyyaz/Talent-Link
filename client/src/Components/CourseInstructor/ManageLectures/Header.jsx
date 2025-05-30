import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDarkModeStore } from "../../../Store/DarkModeStore";

const Header = () => {
  const { mode } = useDarkModeStore();

  /* ── dark-mode helpers ─────────────────────────── */
  const barClass = `
    w-full text-start my-3 md:my-6 rounded-md px-3 md:px-8 py-4 md:py-3
    md:flex md:items-center justify-between
    ${mode === "light" ? "bg-bgwhite" : "bg-dark"}
  `.trim();

  const crumbMuted = mode === "dark" ? "text-gray-400" : "text-neutral-500";
  /* ─────────────────────────────────────────────── */

  return (
    <header>
      <div className={barClass}>
        <h1 className="text-lg text-InstructorPrimary font-bold">
          Manage Lecture
        </h1>
        <div>
          <p className={`inline-block text-sm ${crumbMuted}`}>Course</p>
          <p
            className={`inline-block font-medium text-sm ${crumbMuted} mx-1.5`}
          >
            <FaGreaterThan size={10} />
          </p>
          <p className="inline-block font-medium text-sm text-InstructorPrimary">
            Manage Lecture
          </p>
        </div>
      </div>

      <Link to="/dashboardCompany/all-courses">
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => console.log("Navigate to course list")}
        >
          Back to Courses
        </button>
      </Link>
    </header>
  );
};

export default Header;
