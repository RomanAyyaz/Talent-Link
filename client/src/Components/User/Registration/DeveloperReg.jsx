import EarthSection from "./EarthSection"
import Login from "./Login"

function DeveloperReg() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="w-full md:w-2/5 ">
        <Login/>
      </div>
      <div className="w-full md:w-3/5 bg-black">
        <EarthSection/>
      </div>
    </div>
  )
}

export default DeveloperReg
