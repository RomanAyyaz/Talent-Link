import React, { useState } from 'react';
import { FaSearch, FaMicrophone, FaFileAlt } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description, isActive, onClick }) => (
  <div 
    className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105
                `}
    onClick={onClick}
  >
    <div className="flex justify-center mb-4">
      <div className={`rounded-full p-4 text-white bg-HeroButtonOne`}>
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const TestimonialCard = ({ name, role, quote, image }) => (
  <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
    <div className="mb-4 w-20 h-20 overflow-hidden rounded-full">
      <img className="w-full h-full object-cover" src={image} alt={name} />
    </div>
    <p className="text-gray-600 italic mb-4 text-center">"{quote}"</p>
    <div className="font-semibold text-center">{name}</div>
    <div className="text-sm text-gray-500 text-center">{role}</div>
  </div>
);

const EnhancedFeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "Find Jobs",
      description: "Explore personalized job recommendations and connect with top employers.",
      detail: "Our AI-powered job matching algorithm analyzes your skills, experience, and preferences to find the perfect opportunities for you. Get daily job alerts and insider tips on companies that are hiring."
    },
    {
      icon: <FaMicrophone className="w-8 h-8" />,
      title: "Interview Preparation",
      description: "Ace your interviews with expert advice and practice sessions.",
      detail: "Access a library of common interview questions, industry-specific mock interviews, and real-time feedback on your responses. Our AI coach helps you improve your communication skills and confidence."
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Build Resumes",
      description: "Create professional resumes using our easy-to-use tools and templates.",
      detail: "Choose from a variety of ATS-friendly templates, customize your resume with our drag-and-drop builder, and get real-time suggestions to optimize your content. Our resume scorer helps you stand out from the crowd."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      quote: "This platform helped me land my dream job at a top tech company. The interview prep was invaluable!",
      image: "https://t3.ftcdn.net/jpg/07/30/48/74/360_F_730487462_f3zveqktnzAYx4jEQXvAQU5Xqjv2BaJ0.jpg"
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      quote: "I was amazed at how quickly I started getting responses after using the resume builder. Highly recommended!",
      image: "https://t3.ftcdn.net/jpg/07/30/48/74/360_F_730487462_f3zveqktnzAYx4jEQXvAQU5Xqjv2BaJ0.jpg"
    }
  ];

  return (
    <section className="bg-bgFeatureSection py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          Accelerate Your Career Growth
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Unlock your potential with our cutting-edge tools and expert guidance. Your dream career is just a click away.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
              isActive={activeFeature === index}
              onClick={() => setActiveFeature(index)}
            />
          ))}
        </div>
        <div className="bg-bgwhite rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-HeroButtonOne mb-4">{features[activeFeature].title}</h3>
          <p className="text-black">{features[activeFeature].detail}</p>
        </div>
        <div className="text-center mb-16 animate-bounce">
          <button className="bg-HeroButtonOne text-white font-semibold py-3 px-8 rounded-full hover:bg-HeroButtonOne/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-HeroButtonOne focus:ring-offset-2">
            Get Started Now
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeatureSection;

