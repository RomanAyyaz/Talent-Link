const TopQuizPerformer = () => {
    // Dummy data for top performers
    const performersData = [
      {
        
        id: 1,
        name: "Alex Johnson",
        avatar: "https://html.themewant.com/jobpath/template/assets/img/author/1.svg?height=40&width=40",
        score: 98,
        timeTaken: "12m 45s",
        rank: 1,
      },
      {
        id: 2,
        name: "Sarah Williams",
        avatar: "https://html.themewant.com/jobpath/template/assets/img/author/1.svg?height=40&width=40",
        score: 95,
        timeTaken: "14m 20s",
        rank: 2,
      },
      {
        id: 3,
        name: "Michael Brown",
        avatar: "https://html.themewant.com/jobpath/template/assets/img/author/1.svg?height=40&width=40",
        score: 92,
        timeTaken: "15m 10s",
        rank: 3,
      },
      {
        id: 4,
        name: "Emily Davis",
        avatar: "https://html.themewant.com/jobpath/template/assets/img/author/1.svg?height=40&width=40",
        score: 89,
        timeTaken: "16m 05s",
        rank: 4,
      },
      {
        id: 5,
        name: "David Wilson",
        avatar: "https://html.themewant.com/jobpath/template/assets/img/author/1.svg?height=40&width=40",
        score: 87,
        timeTaken: "16m 30s",
        rank: 5,
      },
    ]
  
    // Function to get medal based on rank
    const getMedal = (rank) => {
      switch (rank) {
        case 1:
          return "🥇"
        case 2:
          return "🥈"
        case 3:
          return "🥉"
        default:
          return null
      }
    }
  
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
        
  
          {/* Top Performers Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Top Quiz Performers</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</button>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performersData.map((performer) => (
                <div
                  key={performer.id}
                  className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <img
                          src={performer.avatar || "/placeholder.svg"}
                          alt={`${performer.name}'s avatar`}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        {getMedal(performer.rank) && (
                          <span className="absolute -top-1 -right-1 text-lg">{getMedal(performer.rank)}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{performer.name}</h3>
                        <p className="text-xs text-gray-500">Rank #{performer.rank}</p>
                      </div>
                    </div>
  
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Score</span>
                        <span className="text-sm font-semibold text-gray-900">{performer.score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${performer.score}%` }}></div>
                      </div>
                    </div>
  
                    <div className="mb-5">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-400 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-sm text-gray-600">Time: {performer.timeTaken}</span>
                      </div>
                    </div>
  
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        View Details
                      </button>
                      <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        Download CV
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default TopQuizPerformer
  