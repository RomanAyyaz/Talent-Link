import React from 'react';
import SuccessStory from '../../../../Assets/SuccessStoriesImages/SuccessStory.png'; 
import SuccessStoriesImages from './SuccessStoriesImages';

function SuccessStories (){
    let successstoriesData = [
        {
            Image:SuccessStory,
        },
      ]
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white p-6 md:p-12 rounded-lg shadow-lg">
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 space-y-8">
        <div className="text-center lg:text-left">
          <p className="uppercase tracking-wider text-sm font-semibold text-gray-500">Get inspired by our success stories</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">Interview of the Month with Adelle Franklin.</h2>
        </div>
        <div className="bg-orange-600 p-8 mt-4">
          <p className="text-white text-5xl m-6 font-semibold">
            “I am not interested in photography where the subject is playing”
          </p>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 hidden lg:block">
      {successstoriesData.map((values,index)=>{
                return(
                    <SuccessStoriesImages data = {values} key = {index}/>
                )
            })}
      </div>
    </div>
  );
};

export default SuccessStories;
