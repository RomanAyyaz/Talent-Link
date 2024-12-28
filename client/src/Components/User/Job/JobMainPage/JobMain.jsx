import React from "react";
import { MapPin, Briefcase, Clock, DollarSign } from "lucide-react";
//import Navbar from "../../LandingPage/Navbar/Navbar";
import Navbar from "../../Navbar";

export default function JobMain() {
  return (
    <>
      <Navbar />
      <div className="w-full md:h-[300px]   md:text-start">
        <div className="bg-bgNavbar h-full px-6 py-8 md:py-20 relative overflow-hidden">
          {/* Main content */}
          <div className="md:flex md:px-10 md:items-start md:gap-6">
            {/* Company Logo - only show on desktop */}
            <div className="hidden md:block mt-3 flex-shrink-0">
              <div className="w-[110px] h-[110px] bg-white rounded-lg flex items-center justify-center">
                <img
                  src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
                  alt=""
                  className="h-[50px] w-[50px] rounded-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Title */}
              <h2 className="text-2xl md:text-4xl font-normal text-white mb-4">
                Senior UI Designer, Apple
              </h2>

              {/* Job Details */}
              <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-HeroButtonOne" />
                  <span className=" text-white">Newyork, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-HeroButtonOne" />
                  <span className=" text-white">Full Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-HeroButtonOne" />
                  <span className=" text-white">1 Years Ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-HeroButtonOne" />
                  <span className=" text-white">$1000 - $2000 Monthly</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["Creative", "User Interface", "Web Ui"].map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-1.5 rounded-md bg-white text-black text-sm hover:cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
