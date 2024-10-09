import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResumePreview from "./ResumePreview";
import { ResumeInfoContext } from "../../../Context/ResumeInfoContext";
import { useQuery } from "@tanstack/react-query";
import { getDataOfResumeApi } from "../ResumeApis/ResumeApi";

function ViewResume() {
  const [resumeInfo, SetResumeInfo] = useState();
  //Use param hook for extracting id from the url
  let { id } = useParams();
  const resumeUrl = `http://localhost:8000/resume/${id}/view`;
  //Api calling for getting the data of that specific resume
  const { data, isLoading, error } = useQuery({
    queryKey: ["resumes", id],
    queryFn: () => getDataOfResumeApi(id),
  });
  const resumeData = data?.data || {};
  useEffect(() => {
    if (data && data.data) {
      SetResumeInfo(resumeData);
    } else {
      SetResumeInfo({});
    }
  }, [data]);

  const HandleDownload=()=>{
    window.print();
}
const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Resume",
        text: "Check out my resume!",
        url: resumeUrl,
      })
      .then(() => console.log('Successfully shared'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, SetResumeInfo }}>
      <div id="no-print">
        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your Ultimate AI generated Resume is ready !{" "}
          </h2>
          <p className="text-center text-gray-400">
            Now you are ready to download your resume and you can share unique
            resume url with your friends and family{" "}
          </p>
          <div className="flex justify-between px-44 my-10">
            <button className="bg-purple-600 px-3 py-2 rounded-md text-white"
             onClick={HandleDownload}>Download</button>
             <button className="bg-purple-600 px-3 py-2 rounded-md text-white" onClick={handleShare}>
          Share Resume
        </button>
          </div>
        </div>
      </div>
      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
