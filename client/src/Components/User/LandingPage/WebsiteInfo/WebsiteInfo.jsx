import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import FeatureImage from '../../../../Assets/WebsiteInfoImages/FeatureImage.jpg';
import WebsiteInfoImages from './WebsiteInfoImages';

function WebsiteInfo() { 
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  let websiteinfoData = [
    {
      Image: FeatureImage,
    },
  ];

  return (
    <div className='flex items-center justify-center  bg-gray-100'>
      <div ref={sectionRef} className='flex flex-col lg:flex-row items-center lg:items-start bg-white p-6 md:p-12'>
        <div className='relative w-full lg:w-1/2 hidden lg:block'>
          {websiteinfoData.map((values, index) => (
            <WebsiteInfoImages data={values} key={index} />
          ))}
        </div>
        <div className='w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 space-y-8'>
          <div className='flex '>
            <h2 className='text-4xl font-bold text-orange-600 mr-4'>
              {inView && <CountUp end={45} suffix="+" />}
            </h2>
            <div>
              <h3 className='text-xl text-left font-semibold'>Best & Most Involved Teachers</h3>
              <p className='mt-2  text-left text-gray-600'>
                Key features are the ability to develop relationships with their students, patient, caring, and kind personality, knowledge of learners. Engaging students in learning.
              </p>
            </div>
          </div>
          <div className='flex '>
            <h2 className='text-4xl font-bold text-orange-600 mr-4'>
              {inView && <CountUp end={1200} duration={2.5} formattingFn={(value) => `${(value / 1000).toFixed(1)}k`} />}
            </h2>
            <div>
              <h3 className='text-xl text-left font-semibold'>Large selection of courses</h3>
              <p className='mt-2 text-left text-gray-600'>
                Explore a variety of fresh topics. Find the right instructor for you. Learn on your schedule.
              </p>
            </div>
          </div>
          <div className='flex'>
            <h2 className='text-4xl text-left font-bold text-orange-600 mr-4'>
              {inView && <CountUp end={24} duration={2.5} />}
            </h2>
            <div className='ml-7'>
              <h3 className='text-xl text-left font-semibold'>High-Quality Course Categories</h3>
              <p className='mt-2 text-left text-gray-600'>
                For many years, we have been helping people of all interests and ages learn and we have more positive reviews than anyone else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteInfo;
