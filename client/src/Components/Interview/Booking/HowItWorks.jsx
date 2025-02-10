import React from 'react';
import { ClipboardDocumentListIcon, CalendarIcon, PencilSquareIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Step = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className=" bg-HeroButtonOne  p-3 rounded-full mb-4">
      <Icon className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardDocumentListIcon,
      title: "Select Interview Type",
      description: "Choose between a Technical or HR interview."
    },
    {
      icon: CalendarIcon,
      title: "Pick Date & Time",
      description: "Select a convenient schedule."
    },
    {
      icon: PencilSquareIcon,
      title: "Write Your Prompt",
      description: "Mention your expectations for the interview."
    },
    {
      icon: UserGroupIcon,
      title: "Attend & Get Feedback",
      description: "Join the interview and receive a detailed assessment."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
