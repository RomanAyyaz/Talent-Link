import React, { useState } from "react";
import { 
  ArrowUp, 
  Eye, 
  Star, 
  FileText, 
  Briefcase 
} from "react-feather"; // You'll need to install react-feather for icons

const ComDash = () => {
  const [timeframe, setTimeframe] = useState("weekly");

  // Different data for each timeframe
  const chartData = {
    weekly: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 700, 800, 750, 700, 750, 800, 850, 900, 1000],
    monthly: [200, 250, 300, 320, 380, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 980, 990, 1000],
    yearly: [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 920, 940, 960, 980, 990, 995, 1000]
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 font-sans">

      {/* Applications Overview Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Applications Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className="bg-gray-100 p-4 rounded-lg mr-6">
              <Briefcase className="text-green-500" size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">20+</h3>
              <p className="text-gray-500 text-xl">Job Posted</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className="bg-gray-100 p-4 rounded-lg mr-6">
              <FileText className="text-green-500" size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">30+</h3>
              <p className="text-gray-500 text-xl">Application</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className="bg-gray-100 p-4 rounded-lg mr-6">
              <Eye className="text-green-500" size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">700+</h3>
              <p className="text-gray-500 text-xl">Views</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className="bg-gray-100 p-4 rounded-lg mr-6">
              <Star className="text-green-500" size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">100+</h3>
              <p className="text-gray-500 text-xl">Review</p>
            </div>
          </div>
        </div>
      </div>


      {/* Profile View Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Profile View</h2>
          <div className="flex space-x-4">
            <button 
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                timeframe === "weekly" ? "bg-green-500 text-white" : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setTimeframe("weekly")}
            >
              Weekly
            </button>
            <button 
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                timeframe === "monthly" ? "bg-green-500 text-white" : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setTimeframe("monthly")}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                timeframe === "yearly" ? "bg-green-500 text-white" : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setTimeframe("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
        
        {/* Chart */}
        <div className="h-80 relative">
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-500 text-right pr-2">
            <span>1000</span>
            <span>900</span>
            <span>800</span>
            <span>700</span>
            <span>600</span>
            <span>500</span>
            <span>400</span>
            <span>300</span>
            <span>200</span>
            <span>100</span>
          </div>
          <div className="ml-12 h-full relative">
            {/* Horizontal grid lines */}
            <div className="absolute w-full h-full flex flex-col justify-between">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="border-t border-dashed border-gray-300 w-full"></div>
              ))}
            </div>
            
            {/* Chart line - in a real app, you'd use a charting library */}
            <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(34, 197, 94, 0.2)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </linearGradient>
              </defs>
              <path
                d={`M0,${400 - chartData[timeframe][0] * 0.4} ${chartData[timeframe].map((point, i) => `L${(i * 1000) / (chartData[timeframe].length - 1)},${400 - point * 0.4}`).join(' ')}`}
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
              />
              <path
                d={`M0,${400 - chartData[timeframe][0] * 0.4} ${chartData[timeframe].map((point, i) => `L${(i * 1000) / (chartData[timeframe].length - 1)},${400 - point * 0.4}`).join(' ')} L1000,400 L0,400 Z`}
                fill="url(#gradient)"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>

     

      {/* Recent Notification Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-start">Recent Notification</h2>
        
        <div className="space-y-6 text-start">
          <div className="flex items-start">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Profile" 
              className="w-16 h-16 rounded-lg mr-4 object-cover"
            />
            <div className="flex-1">
              <p className="text-gray-600 text-lg">
                A meeting is canceled on your job <span className="text-black font-medium">Software Engineer</span> position by <span className="text-black font-medium">Michael Roy</span>.
              </p>
              <p className="text-gray-500 mt-2">2 hours ago</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-lg mr-4 bg-orange-500 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/43.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-lg">
                  A meeting is canceled on your job <span className="text-black font-medium">Senior UI designer</span> by <span className="text-black font-medium">Jonathon Doe</span>.
                </p>
                <p className="text-gray-500 mt-2">2 hours ago</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-lg mr-4 bg-yellow-400 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/91.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-lg">
                  A meeting is canceled on your job <span className="text-black font-medium">Senior UX designer</span> by <span className="text-black font-medium">Jack Alexander</span>.
                </p>
                <p className="text-gray-500 mt-2">2 hours ago</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ComDash;