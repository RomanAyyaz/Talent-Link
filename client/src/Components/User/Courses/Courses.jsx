import React, { useState } from "react";
import Navbar from "../Navbar";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCoursesData, searchCoursesApi } from "./CoursesApi";
import Fotter from "../Fotter/Fotter";
import CoursesList from "./CoursesList/CoursesList";

function Courses() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("Newly Published");
  const [query, setQuery] = useState("");
  const toggleDropdown = () => setIsOpen(!isOpen);

  // API call for getting the data of courses
  const { data, isLoading, Error } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCoursesData,
  });
  const [searchResults, setSearchResults] = useState(null);

  // Mutation for handling search API call
  const searchMutation = useMutation({
    mutationFn: searchCoursesApi,
    onSuccess: (data) => {
      setSearchResults(data.coursesData);
    },
    onError: (error) => {
      console.error("Search error:", error);
    },
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    searchMutation.mutate(query);
  };

  if (isLoading) {
    return <div>Data is loading</div>;
  }
  if (Error) {
    return <div>Some error in loading the data</div>;
  }

  let coursesData = searchResults || data?.coursesData || [];

  if (dropDownValue === "Price low to high") {
    coursesData = [...coursesData].sort((a, b) => a.price - b.price);
  } else if (dropDownValue === "Price high to low") {
    coursesData = [...coursesData].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="">
      <Navbar />
      <div className="w-full px-2.5 pt-8 text-start md:px-10">
        <h1 className="text-3xl text-start font-bold md:mt-8 md:text-5xl">
          Courses
        </h1>
        <div className="mt-3 md:flex md:gap-1 justify-between items-center">
          <form className="w-full" onSubmit={handleSearch}>
            <div className="md:mt-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border w-full px-2.5 py-3.5 rounded-md text-sm font-medium border-1 focus:border-HeroButtonOne focus:outline-none"
                placeholder="Search Courses..."
              />
            </div>
          </form>
          <div className="md:w-52 relative inline-block text-left border rounded-md mt-3">
            {/* Dropdown button */}
            <button
              onClick={toggleDropdown}
              className="inline-flex items-center justify-center text-black border border-1 w-full rounded-md bg-white pl-3 pr-10 md:px-2.5 md:py-3.5 py-2 text-sm font-medium shadow-sm focus:border-HeroButtonOne focus:outline-none"
            >
              {dropDownValue}
            </button>
            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute border px-3 md:px-0 z-10 mt-2 w-40 md:w-52 origin-top-right rounded-md bg-white shadow-lg">
                <ul className="py-1 text-base">
                  <li
                    className="my-0.5 md:my-1 cursor-pointer md:px-2 hover:bg-gray-200"
                    onClick={() => {
                      setDropDownValue("Price low to high");
                      setIsOpen(false);
                    }}
                  >
                    Price low to high
                  </li>
                  <li
                    className="my-0.5 md:px-2 md:my-1 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setDropDownValue("Price high to low");
                      setIsOpen(false);
                    }}
                  >
                    Price high to low
                  </li>
                  <li
                    className="my-0.5 md:my-1 md:px-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setDropDownValue("Popular");
                      setIsOpen(false);
                    }}
                  >
                    Popular
                  </li>
                  {/* Additional sorting options can be added here */}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Render the list of courses */}
      <div>
        {coursesData.length === 0 ? (
          <div className="my-20 text-lg font-bold">No Course available</div>
        ) : (
          coursesData.map((courseData, i) => (
            <div key={i}>
              <CoursesList courseData={courseData} />
            </div>
          ))
        )}
      </div>

      <div className="">
        <Fotter />
      </div>
    </div>
  );
}

export default Courses;
