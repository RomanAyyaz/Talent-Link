import React from 'react'

function Certification({resumeInfo}) {
  return (
    <div>
         <h2
          className="text-center font-bold text-sm mb-2"
          style={{ color: resumeInfo.themeColor }}
        >
          Certification
        </h2>
        <hr style={{ borderColor: resumeInfo.themeColor }} />
        {resumeInfo.certification &&
          resumeInfo.certification.length > 0 &&
          resumeInfo.certification.map((certification, index) => (
            <div key={index} className="my-5">
              <h3
                className="font-bold text-sm"
                style={{ color: resumeInfo.themeColor }}
              >
                {certification.certificationName}
              </h3>
              <p className="my-2 text-sm">{certification.certificationSummery}</p>
            </div>
          ))}
    </div>
  )
}

export default Certification