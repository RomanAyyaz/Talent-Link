'use client';

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Software Engineer",
    quote: "Talent Link's mock interviews helped me land my dream job!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsz3G4u514FwWrq6Fm7vWaaEqpvEbfQGhLew&s"
  },
  {
    name: "Michael Chen",
    title: "Product Manager",
    quote: "The feedback I received was invaluable for my career growth.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjtNi1m_f5OuxG9GcNMqa9i4F2sq_dVREdA&s"
  },
  {
    name: "Emily Rodriguez",
    title: "UX Designer",
    quote: "I felt so much more confident in my real interview after practicing with Talent Link.",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsz3G4u514FwWrq6Fm7vWaaEqpvEbfQGhLew&s"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Success Stories & Testimonials</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img
              src={testimonials[currentIndex].image || "/placeholder.svg"}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-xl italic text-center mb-4">"{testimonials[currentIndex].quote}"</p>
            <div className="text-center">
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
