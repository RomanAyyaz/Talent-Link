import React from 'react';
const StatsCard = ({ icon: Icon, number, label }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
      <div className="bg-gray-50 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-HeroButtonOne" />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">{number}</div>
        <div className="text-gray-500 mt-1">{label}</div>
      </div>
    </div>
  );
};

export default StatsCard;

