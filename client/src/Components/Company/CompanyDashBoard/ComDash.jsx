import React, { useState } from "react";
import { 
  Eye, 
  Star, 
  FileText, 
  Briefcase 
} from "react-feather"; // You'll need to install react-feather for icons
import { useDarkModeStore } from "../../../Store/DarkModeStore";

const ComDash = () => {
  const [timeframe, setTimeframe] = useState("weekly");
  const { mode, setMode } = useDarkModeStore();
  const chartData = {
    weekly: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 700, 800, 750, 700, 750, 800, 850, 900, 1000],
    monthly: [200, 250, 300, 320, 380, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 980, 990, 1000],
    yearly: [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 920, 940, 960, 980, 990, 995, 1000]
  };

  return (
    <div className={`${mode === 'light' ? 'bg-gray-50' : 'bg-darkk'} min-h-screen p-6 font-sans`}>

      {/* Applications Overview Section */}
      <div className={`mb-6`}>
        <h2 className={`text-2xl ${mode === 'dark' ? "text-white" : "text-gray-800"} font-bold mb-6`}>
          Applications Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`rounded-lg ${mode === 'dark' ? "bg-dark" : "bg-white"} shadow-sm p-6 flex items-center`}>
            <div className={`${mode === 'dark' ? "bg-darkk" : "bg-gray-100"} p-4 rounded-lg mr-6`}>
              <Briefcase className="text-green-500" size={24} />
            </div>
            <div>
              <h3 className={`text-3xl font-bold ${mode === 'dark' ? "text-white" : "text-gray-800"}`}>20+</h3>
              <p className={`${mode === 'dark' ? "text-white" : "text-gray-500"} text-xl`}>Job Posted</p>
            </div>
          </div>

          <div className={`rounded-lg ${mode === 'dark' ? "bg-dark" : "bg-white"} shadow-sm p-6 flex items-center`}>
            <div className={`${mode === 'dark' ? "bg-darkk" : "bg-gray-100"} p-4 rounded-lg mr-6`}>
              <FileText className="text-green-500" size={24} />
            </div>
            <div>
              <h3 className={`text-3xl font-bold ${mode === 'dark' ? "text-white" : "text-gray-800"}`}>30+</h3>
              <p className={`${mode === 'dark' ? "text-white" : "text-gray-500"} text-xl`}>Application</p>
            </div>
          </div>

          <div className={`rounded-lg ${mode === 'dark' ? "bg-dark" : "bg-white"} shadow-sm p-6 flex items-center`}>
            <div className={`${mode === 'dark' ? "bg-darkk" : "bg-gray-100"} p-4 rounded-lg mr-6`}>
              <Eye className="text-green-500" size={24} />
            </div>
            <div>
              <h3 className={`text-3xl font-bold ${mode === 'dark' ? "text-white" : "text-gray-800"}`}>700+</h3>
              <p className={`${mode === 'dark' ? "text-white" : "text-gray-500"} text-xl`}>Views</p>
            </div>
          </div>

          <div className={`rounded-lg ${mode === 'dark' ? "bg-dark" : "bg-white"} shadow-sm p-6 flex items-center`}>
            <div className={`${mode === 'dark' ? "bg-darkk" : "bg-gray-100"} p-4 rounded-lg mr-6`}>
              <Star className="text-green-500" size={24} />
            </div>
            <div>
              <h3 className={`text-3xl font-bold ${mode === 'dark' ? "text-white" : "text-gray-800"}`}>100+</h3>
              <p className={`${mode === 'dark' ? "text-white" : "text-gray-500"} text-xl`}>Review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile View Section */}
      <div className={`${mode === 'dark' ? 'bg-dark' : 'bg-white'} rounded-lg shadow-sm p-6 mb-6`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>Profile View</h2>
          <div className="flex space-x-4">
            {["weekly", "monthly", "yearly"].map((range) => (
              <button
                key={range}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  timeframe === range
                    ? "bg-green-500 text-white"
                    : `${mode === 'dark' ? 'text-gray-300 hover:bg-darkk' : 'text-gray-500 hover:bg-gray-100'}`
                }`}
                onClick={() => setTimeframe(range)}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="h-80 relative">
          <div className={`absolute left-0 top-0 h-full flex flex-col justify-between ${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'} text-right pr-2`}>
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
            <div className="absolute w-full h-full flex flex-col justify-between">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`border-t border-dashed ${mode === 'dark' ? 'border-gray-700' : 'border-gray-300'} w-full`}></div>
              ))}
            </div>

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
      <div className={`${mode === 'dark' ? 'bg-dark' : 'bg-white'} rounded-lg shadow-sm p-6`}>
        <h2 className={`text-2xl font-bold mb-6 text-start ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>Recent Notification</h2>
        <div className="space-y-6 text-start">
          {[{
            name: "Michael Roy",
            role: "Software Engineer",
            img: "https://randomuser.me/api/portraits/men/32.jpg"
          }, {
            name: "Jonathon Doe",
            role: "Senior UI designer",
            img: "https://randomuser.me/api/portraits/men/43.jpg"
          }, {
            name: "Jack Alexander",
            role: "Senior UX designer",
            img: "https://randomuser.me/api/portraits/men/91.jpg"
          }].map((notification, i) => (
            <div key={i} className={`${i !== 0 ? 'border-t pt-6' : ''} ${mode === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-lg mr-4 overflow-hidden">
                  <img
                    src={notification.img}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
                    A meeting is canceled on your job <span className={`${mode === 'dark' ? 'text-white' : 'text-black'} font-medium`}>{notification.role}</span> position by <span className={`${mode === 'dark' ? 'text-white' : 'text-black'} font-medium`}>{notification.name}</span>.
                  </p>
                  <p className={`${mode === 'dark' ? 'text-gray-500' : 'text-gray-500'} mt-2`}>2 hours ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ComDash;
