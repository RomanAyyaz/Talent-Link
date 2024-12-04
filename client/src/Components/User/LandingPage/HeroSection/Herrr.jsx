import { useState } from 'react'
import { Menu, Search, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import ImageOne from '../../../../Assets/HeroSectionImages/imageOne.jpg'
function Hero2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Talent-Link</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-300">HOME</a>
              <a href="#" className="text-white hover:text-gray-300">NEWS</a>
              <a href="#" className="text-white hover:text-gray-300">FEATURES</a>
              <a href="#" className="text-white hover:text-gray-300">COURSES</a>
              <a href="#" className="text-white hover:text-gray-300">ABOUT</a>
              <a href="#" className="text-white hover:text-gray-300">OUR TEAM</a>
              <a href="#" className="text-white hover:text-gray-300">CONTACT</a>
            </div>

            {/* Social Icons */}
            {/* <div className="hidden md:flex items-center space-x-4">
              <Facebook className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
              <Twitter className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
              <Instagram className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
              <Youtube className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
              <Search className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
            </div> */}
            <div className="hidden md:flex items-center space-x-4">

            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700">HOME</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700">NEWS</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700">FEATURES</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700">COURSES</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700">ABOUT</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700">OUR TEAM</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700">CONTACT</a>
              <button className="w-full text-left px-3 py-2 text-white bg-[#1e3851] hover:bg-[#2a4d6e]">
                PURCHASE
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div 
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${ImageOne})`
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="bg-[#ff4a17] rounded-full mb-8">
           <img src="https://demo.themnific.com/edulogy/wp-content/uploads/2020/04/edulogy-icon.png" alt="" />
          </div>
          <div className="max-w-4xl">
            <p className="text-white text-xl mb-4">We believe in</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Passion for Learning
            </h1>
            <p className="text-white text-xl">
              and Edulogy is a great tool to learn!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2