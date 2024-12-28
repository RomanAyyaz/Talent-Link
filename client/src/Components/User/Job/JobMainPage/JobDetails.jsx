export default function JobDetails() {
    const tabs = [
      { id: 'all', label: 'All', isActive: true },
      { id: 'description', label: 'Job Description', isActive: false },
      { id: 'responsibilities', label: 'Responsibilities', isActive: false },
      { id: 'requirements', label: 'Requirements', isActive: false },
      { id: 'skills', label: 'Skill & Experience', isActive: false },
      { id: 'salary', label: 'Salary & Benefits', isActive: false }
    ]
  
    return (
      <div className="flex flex-wrap gap-2 p-4 md:py-4 md:px-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              tab.isActive
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    )
  }
  