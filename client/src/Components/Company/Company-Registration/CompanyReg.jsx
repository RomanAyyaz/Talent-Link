import EarthSection from "../../User/Registration/EarthSection"
import CompanyRegistration from "./CompanyRegistration"

function CompanyReg() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="w-full md:w-2/5 ">
       <CompanyRegistration/>
      </div>
      <div className="w-full md:w-3/5 bg-black">
       <EarthSection/>
      </div>
    </div>
  )
}

export default CompanyReg
