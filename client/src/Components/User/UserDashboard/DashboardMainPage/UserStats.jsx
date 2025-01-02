import React from 'react';
import { Briefcase, ClipboardList, Eye, Bell } from 'lucide-react';
import StatsCard from './StatsCard';

const UserStats= () => {
  const stats = [
    {
      icon: Briefcase,
      number: '10+',
      label: 'Applied Job'
    },
    {
      icon: ClipboardList,
      number: '20+',
      label: 'Shortlist Job'
    },
    {
      icon: Eye,
      number: '555+',
      label: 'Views'
    },
    {
      icon: Bell,
      number: '20+',
      label: 'Job Alerts'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          icon={stat.icon}
          number={stat.number}
          label={stat.label}
        />
      ))}
    </div>
  );
};

export default UserStats;

