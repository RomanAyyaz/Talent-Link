import React from "react"

function Footer() {
  return (
    <footer className="bg-[#010916] text-gray-300 py-12 px-6 md:px-12 lg:px-24">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Products Column */}
        <div className="text-start">
          <h3 className="text-white text-xl font-medium mb-6">Products</h3>
          <ul className="space-y-4">
           
          </ul>
        </div>

        {/* Solutions Column */}
        <div className="text-start">
          <h3 className="text-white text-xl font-medium mb-6">Solutions</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-green-500 transition-colors">Set up your skills strategy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Showcase your tech brand</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Optimize your hiring process</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mobilize your internal talent</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="text-start" >
          <h3 className="text-white text-xl font-medium mb-6">Resources</h3>
          <ul className="space-y-4">
            
          </ul>
        </div>

        {/* About us Column */}
        <div className="text-start">
          <h3 className="text-white text-xl font-medium mb-6">About us</h3>
          <ul className="space-y-4">
            
          </ul>
        </div>

        {/* Get started Column */}
        <div className="text-start">
          <h3 className="text-white text-xl font-medium mb-6">Get started</h3>
          <ul className="space-y-4">
            
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
          {/* HackerRank Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-white text-3xl font-bold">T</span>
            <div className="w-7 h-7 bg-green-500 ml-0.5"></div>
          </div>
          <span className="text-gray-500 text-sm">© Talent Link 2025 All Rights Reserved.</span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Legal Links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
