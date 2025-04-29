import { Link } from "react-router-dom";
import { useUserStore } from "../../../Store/UserStore";
import Navbar from "../Navbar"
function CoLandingPage() {
  const { user} = useUserStore();
  return (
    <>
      <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <div className="mb-16 text-2xl font-bold transform transition-all duration-500 ease-out">
          <span className="text-red-500">Job</span>
          <span className="text-neutral-800">Copilot</span>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            <span className="block">Get 10X more</span>
            <span className="block">Job Interviews with</span>
            <span className="text-red-500">JobCopilot</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-700 mb-12">
            Use AI to automatically apply to jobs on Talent Link
          </p>
          <Link to={'/jobCopilot/jobPref'}>
          <button
            type="button"
            onClick={() => console.log('Continue clicked')}
            className="w-full md:w-auto px-12 py-4 text-xl text-white bg-red-500 rounded-full font-medium shadow-md hover:bg-primary-600 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
          >
            Continue as {user.fullname}
          </button>
          </Link>

          <p className="mt-6 text-sm text-neutral-500">
            By using JobCopilot you agree to these{' '}
            <a href="#" className="text-neutral-800 hover:text-primary-500 underline transition-colors">
              Terms
            </a>{' '}
            &{' '}
            <a href="#" className="text-neutral-800 hover:text-primary-500 underline transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default CoLandingPage;