import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';
import { BsBriefcaseFill, BsCalendarEvent } from 'react-icons/bs';
import { IoSchool, IoWallet } from 'react-icons/io5';
import Navbar from '../Navbar'
import { useUserStore } from '../../../Store/UserStore';
const ProfileComponent = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 const { user} = useUserStore();
  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Profile Header */}
      <div className="bg-bgJobMainPage py-24 px-10 shadow-sm">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
          <img 
            src={`http://localhost:8000${user.imageUrl}`}
            alt="Profile" 
            className="w-36 h-36 rounded-md object-cover"
          />

          <div className="flex-1 px-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 text-start">Michael Roy</h1>
            <div className=" my-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-500 mb-4">
              <p className="text-xl">Software Engineer</p>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>Newyork, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <BsBriefcaseFill className="text-gray-400" />
                <span>Full Time</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-white text-gray-700 rounded-md">React</span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-md">Nest Js</span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-md">C++</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <button className="bg-white px-6 py-3 border border-green-400 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 relative">
              Shortlist
            </button>
            <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
              Cv Download
            </button>
          </div>

        </div>
        
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-8 px-4 mt-10" >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column */}
          <div className="lg:col-span-2 text-start">
            {/* About Candidate */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Candidate</h2>
              <p className="text-gray-600 leading-relaxed">
                We are seeking a skilled Part-Time Software Engineer to join our team, specializing in
                social media content creation for lead generation purposes. The ideal candidate will
                have a creative flair, technical proficiency, and a strong understanding of social media
                trends and algorithms. Must be able to work Monday-Friday during EST business hours.
                This role will be under the ScaledOn brand, but will be working directly with one of our
                partners as their dedicated Software Engineer.
              </p>
            </div>

            {/* Education */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
              <div className="relative pl-8 border-l-2 border-gray-100">
                {/* Education Item 1 */}
                <div className="mb-10 relative">
                  <div className="absolute -left-[39px] w-3 h-3 rounded-full bg-green-500"></div>
                  <h3 className="text-xl font-medium text-green-500 mb-1">California Institute of Technology</h3>
                  <p className="text-gray-500 italic mb-4">Master of Science in Computer Science (2014- 2015)</p>
                  <p className="text-gray-600">
                    CareerBuilder offers a complete career portal, helping job seekers find better
                    career opportunities and bridge skill gaps through a partnership with Capella
                    Learning Solutions.
                  </p>
                </div>

                {/* Education Item 2 */}
                <div className="mb-10 relative">
                  <div className="absolute -left-[39px] w-3 h-3 rounded-full bg-green-500"></div>
                  <h3 className="text-xl font-medium text-green-500 mb-1">University of California, Berkeley</h3>
                  <p className="text-gray-500 italic mb-4">B. Sc. in Computer Science and Engineering (2010- 2014)</p>
                  <p className="text-gray-600">
                    CareerBuilder offers a complete career portal, helping job seekers find better
                    career opportunities and bridge skill gaps through a partnership with Capella
                    Learning Solutions.
                  </p>
                </div>

                {/* Education Item 3 (duplicate for demo) */}
                <div className="mb-10 relative">
                  <div className="absolute -left-[39px] w-3 h-3 rounded-full bg-green-500"></div>
                  <h3 className="text-xl font-medium text-green-500 mb-1">University of California, Berkeley</h3>
                  <p className="text-gray-500 italic mb-4">B. Sc. in Computer Science and Engineering (2010- 2014)</p>
                  <p className="text-gray-600">
                    CareerBuilder offers a complete career portal, helping job seekers find better
                    career opportunities and bridge skill gaps through a partnership with Capella
                    Learning Solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Awward</h2>
              <div className="relative pl-8 border-l-2 border-gray-100">
                {/* Award Item 1 */}
                <div className="mb-10 relative">
                  <div className="absolute -left-[39px] w-3 h-3 rounded-full bg-green-500"></div>
                  <h3 className="text-xl font-medium text-green-500 mb-1">2015 IEEE CS TCSE Distinguished Education Award</h3>
                  <p className="text-gray-500 italic mb-4">2015</p>
                  <p className="text-gray-600">
                    In a world adorned with stars, where excellence glimmers like distant
                    constellations, there exists a singular moment that transcends the ordinary,
                    capturing the essence of brilliance in its purest form.
                  </p>
                </div>

                {/* Award Item 2 */}
                <div className="mb-10 relative">
                  <div className="absolute -left-[39px] w-3 h-3 rounded-full bg-green-500"></div>
                  <h3 className="text-xl font-medium text-green-500 mb-1">2024 IEEE CS TCSE Rising Star Award</h3>
                  <p className="text-gray-500 italic mb-4">2014</p>
                  <p className="text-gray-600">
                    In a world adorned with stars, where excellence glimmers like distant
                    constellations, there exists a singular moment that transcends the ordinary,
                    capturing the essence of brilliance in its purest form.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">See My Latest Project</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20044325-63ZZYgemJpRFNIAzKH5NDcQ30x73xf.png" 
                    alt="Project 1" 
                    className="w-full h-48 object-cover object-top"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20044325-63ZZYgemJpRFNIAzKH5NDcQ30x73xf.png" 
                    alt="Project 2" 
                    className="w-full h-48 object-cover object-center"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20044325-63ZZYgemJpRFNIAzKH5NDcQ30x73xf.png" 
                    alt="Project 3" 
                    className="w-full h-48 object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            {/* Job Overview */}
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Overview</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 flex items-center justify-center text-green-500">
                    <IoSchool size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Qualification</span>
                      <span className="text-gray-600">Bachelor Degree</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 flex items-center justify-center text-green-500">
                    <BsCalendarEvent size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Experience</span>
                      <span className="text-gray-600">2 Year</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 flex items-center justify-center text-green-500">
                    <IoWallet size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Expected Salary</span>
                      <span className="text-gray-600">$2000-$3000</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 flex items-center justify-center text-green-500">
                    <BsCalendarEvent size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Job Deadline</span>
                      <span className="text-gray-600">01 July 2024</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 flex items-center justify-center text-green-500">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Location</span>
                      <span className="text-gray-600">New York, USA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Socials</h2>
              <div className="flex gap-4">
                <p href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaFacebook size={24} />
                </p>
                <p href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  <FaInstagram size={24} />
                </p>
                <p href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                  <FaLinkedin size={24} />
                </p>
                <p href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  <FaPinterest size={24} />
                </p>
                <p href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  <FaYoutube size={24} />
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Candidate</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(+88)154-678789"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll to top button */}

      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors focus:outline-none"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

    </div>
    </>
  );
};

export default ProfileComponent;