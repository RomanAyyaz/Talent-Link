import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, User, FileText, Briefcase, ListChecks, MessageSquare, Bell } from 'lucide-react';

const SidebarItem = ({ icon: Icon, text, to, isActive }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${
      isActive ? 'bg-gray-100' : ''
    }`}
  >
    <Icon className={`w-5 h-5 ${isActive ? 'text-green-500' : 'text-gray-500'}`} />
    <span className="text-gray-700 font-medium">{text}</span>
  </Link>
);

const Sidebar = () => {
 
  const activeRoute = '/dashboard';

  const menuItems = [
    { icon: LayoutGrid, text: 'Dashboard', to: '/UserDashboard' },
    { icon: User, text: 'Edit Profile', to: '/UserDashboard/user-profile' },
    { icon: FileText, text: 'My Resume', to: '/UserDashboard/myResume' },
    { icon: Briefcase, text: 'Applied Job', to: '/applied-jobs' },
    { icon: ListChecks, text: 'Jobs shortlist', to: '/shortlist' },
    { icon: MessageSquare, text: 'Message', to: '/messages' },
    { icon: Bell, text: 'Job Alerts', to: '/alerts' }
  ];

  return (
    <div className="w-64 h-screen bg-white p-4 space-y-2">
      {menuItems.map((item) => (
        <SidebarItem
          key={item.to}
          icon={item.icon}
          text={item.text}
          to={item.to}
          isActive={item.to === activeRoute}
        />
      ))}
    </div>
  );
};

export default Sidebar;

