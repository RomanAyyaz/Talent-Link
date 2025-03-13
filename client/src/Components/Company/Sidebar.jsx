import { useState } from 'react';
import { 
  HomeIcon, 
  CalendarIcon, 
  // UserGroupIcon, 
  AcademicCapIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom'; 

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon, to: '/dashboard' },
    { name: 'Edit Profile', icon: CalendarIcon, to: '/dashboardCompany/profile' }, 
    // { name: 'Professors', icon: UserGroupIcon, to: '/professors' },
    { 
      name: 'Job', 
      icon: UsersIcon, 
      subItems: [
        { name: 'Post Job', to: '/dashboardCompany/postJob' },
        { name: 'My Job', to: '/dashboardCompany/myJob' },
        { name: 'Edit Courses', to: '#' },
        { name: 'About Courses', to: '#' },
      ]
    },
    { 
      name: 'Courses', 
      icon: AcademicCapIcon,
      subItems: [
        { name: 'All Courses', to: '/dashboardCompany/all-courses' },
        { name: 'Add Courses', to: '/dashboardCompany/add-course' },
        { name: 'Edit Courses', to: '#' },
        { name: 'About Courses', to: '#' },
      ]
    },
    { name: 'Library', icon: BookOpenIcon, to: '/library' },
    { name: 'Departments', icon: BuildingLibraryIcon, to: '/departments' },
    { name: 'Staff', icon: BuildingOfficeIcon, to: '/staff' },
    { name: 'Holiday', icon: CalendarDaysIcon, to: '/holiday' },
    { name: 'Fees', icon: CreditCardIcon, to: '/fees' },
  ];

  // Toggles the expanded menu. If the same index is clicked again, collapse it.
  const handleExpandClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={`bg-bgsidebar h-screen p-4 ${isExpanded ? 'w-60' : 'w-20'} duration-300 relative shadow-lg`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-12 bg-white rounded-full p-1.5 border shadow-md"
        aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isExpanded ? (
          <ChevronLeftIcon className="w-4 h-4" />
        ) : (
          <ChevronRightIcon className="w-4 h-4" />
        )}
      </button>

      <div className="pt-3">
        <p className={`text-gray-400 text-sm mb-4 ${!isExpanded && 'hidden'}`}>MAIN MENU</p>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.subItems ? (
                <div>
                  {/* 
                    On click, toggle expand/collapse 
                    We check if expandedIndex === index to see if it’s expanded 
                  */}
                  <button
                    onClick={() => handleExpandClick(index)}
                    className="flex items-center gap-4 text-gray-600 hover:bg-indigo-50 rounded-lg p-2 group w-full"
                    aria-expanded={expandedIndex === index}
                    aria-controls={`${item.name}-submenu`}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span className={`duration-300 flex-1 text-left ${!isExpanded && 'hidden'}`}>
                      {item.name}
                    </span>
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedIndex === index ? 'transform rotate-180' : ''
                      } ${!isExpanded && 'hidden'}`}
                    />
                    {!isExpanded && (
                      <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                        {item.name}
                      </div>
                    )}
                  </button>
                  <ul 
                    id={`${item.name}-submenu`}
                    className={`mt-2 ml-6 space-y-2 ${!isExpanded && 'hidden'} ${expandedIndex === index ? '' : 'hidden'}`}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link 
                          to={subItem.to}
                          className="flex items-center text-gray-600 hover:text-indigo-600 text-sm"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                item.to ? (
                  <Link
                    to={item.to}
                    className="flex items-center gap-4 text-gray-600 hover:bg-indigo-50 rounded-lg p-2 group"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className={`duration-300 ${!isExpanded && 'hidden'}`}>
                      {item.name}
                    </span>
                    {!isExpanded && (
                      <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                        {item.name}
                      </div>
                    )}
                  </Link>
                ) : (
                  <p
                    href="#"
                    className="flex items-center gap-4 text-gray-600 hover:bg-indigo-50 rounded-lg p-2 group"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className={`duration-300 ${!isExpanded && 'hidden'}`}>
                      {item.name}
                    </span>
                    {!isExpanded && (
                      <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                        {item.name}
                      </div>
                    )}
                  </p>
                )
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
