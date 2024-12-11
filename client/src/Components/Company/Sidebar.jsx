import { useState } from 'react';
import { 
  HomeIcon, 
  CalendarIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Event', icon: CalendarIcon },
    { name: 'Professors', icon: UserGroupIcon },
    { name: 'Students', icon: UsersIcon },
    { name: 'Courses', icon: AcademicCapIcon },
    { name: 'Library', icon: BookOpenIcon },
    { name: 'Departments', icon: BuildingLibraryIcon },
    { name: 'Staff', icon: BuildingOfficeIcon },
    { name: 'Holiday', icon: CalendarDaysIcon },
    { name: 'Fees', icon: CreditCardIcon },
  ];

  return (
    <div className={`bg-bgsidebar h-screen p-4 ${isExpanded ? 'w-60' : 'w-20'} duration-300 relative shadow-lg`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-12 bg-white rounded-full p-1.5 border shadow-md"
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
              <a
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
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

