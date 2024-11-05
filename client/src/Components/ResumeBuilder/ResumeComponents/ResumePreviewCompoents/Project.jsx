import React from 'react'

function Project({resumeInfo}) {
  return (
    <div>
         <h2
          className="text-center font-bold text-sm mb-2"
          style={{ color: resumeInfo.themeColor }}
        >
          Project
        </h2>
        <hr style={{ borderColor: resumeInfo.themeColor }} />
        {resumeInfo.project &&
          resumeInfo.project.length > 0 &&
          resumeInfo.project.map((certification, index) => (
            <div key={index} className="my-5">
              <h3
                className="font-bold text-sm"
                style={{ color: resumeInfo.themeColor }}
              >
                {certification.projectName}
              </h3>
              <p className="my-2 text-sm">{certification.projectDescription}</p>
            </div>
          ))}
    </div>
  )
}

export default Project