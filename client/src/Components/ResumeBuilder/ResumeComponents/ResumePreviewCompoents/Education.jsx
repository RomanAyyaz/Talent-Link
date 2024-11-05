import React from "react";

function Education({ resumeInfo }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };
  return (
    <div>
      <div className="my-6">
        <h2
          className="text-center font-bold text-sm mb-2"
          style={{ color: resumeInfo.themeColor }}
        >
          Education
        </h2>
        <hr style={{ borderColor: resumeInfo.themeColor }} />
        {resumeInfo.education &&
          resumeInfo.education.length > 0 &&
          resumeInfo.education.map((education, index) => (
            <div key={index} className="my-5">
              <h3
                className="font-bold text-sm"
                style={{ color: resumeInfo.themeColor }}
              >
                {education.universityName}
              </h3>
              <h2 className="text-xs flex justify-between mt-1">
                {education.degree} in {education.major}
                <span>
                {formatDate(education.startDate)} - {formatDate(education.endDate)}
                </span>
              </h2>
              <p className="my-2 text-sm">{education.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Education;
