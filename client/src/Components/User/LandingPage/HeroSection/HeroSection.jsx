import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaTwitter,
    FaBars,
    FaCaretDown,
    FaCaretUp,
    FaTimes
  } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageOne from '../../../../Assets/HeroSectionImages/imageOne.jpg'
import ImageTwo from '../../../../Assets/HeroSectionImages/ImageTwo.jpg'

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const backgroundImages = [ImageOne, ImageTwo]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
        setIsTransitioning(false)
      }, 500)
    }, 9000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex justify-between items-center py-3.5">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className='text-2xl font-bold'>Talent-Link</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
            <Link to={'/landingpage'}>
            <a href="#" className="text-white hover:text-gray-300 text-sm font-semibold">HOME</a>
          </Link>
              <a href="#" className="text-white hover:text-gray-300 text-sm font-semibold">NEWS</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm font-semibold">FEATURES</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm font-semibold">COURSES</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm font-semibold">ABOUT</a>
              <Link to={'/ResumeBuilder'}>
              <a href="#" className="text-white hover:text-gray-300 text-sm font-semibold">RESUME</a>
              </Link>
              <a href="#" className="text-white hover:text-gray-300 text-sm font-semibold">CONTACT</a>
            </div>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center space-x-4">
            <div className="hover:bg-facebook relative text-base p-1 group flex items-center justify-center">
            <FaFacebookF />
            <div class="absolute top-5 left-3 mb-2 hidden w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
              Facebook
            </div>
          </div>
          <div className="hover:bg-twitter relative text-base p-1 group flex items-center justify-center">
            <FaTwitter />
            <div class="absolute top-5 left-3 mb-2 hidden w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
              Twitter
            </div>
          </div>
          <div className="hover:bg-instagram relative text-base p-1 group flex items-center justify-center">
            <FaInstagram />
            <div class="absolute top-5 left-3 mb-2 hidden w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
              Instagram
            </div>
          </div>
          <div className="hover:bg-youtube relative text-base p-1 group flex items-center justify-center">
            <FaYoutube />
            <div class="absolute top-5 left-3 mb-2 hidden w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
              Youtube
            </div>
          </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700 text-sm font-semibold">HOME</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700 text-sm font-semibold">NEWS</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700 text-sm font-semibold">FEATURES</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700 text-sm font-semibold">COURSES</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700 text-sm font-semibold">ABOUT</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700 text-sm font-semibold">OUR TEAM</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gray-700 text-sm font-semibold">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            } ${isTransitioning ? 'transition-all' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              zIndex: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="bg-[#ff4a17] rounded-full mb-8 mt-20 lg:mt-10">
            <img 
              src="https://demo.themnific.com/edulogy/wp-content/uploads/2020/04/edulogy-icon.png" 
              alt="Edulogy Icon" 
              className=" w-28 h-28 md:w-36 md:h-36"
            />
          </div>
          <div className="max-w-4xl">
            <p className="text-white text-xl mb-4 font-light">We believe in</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Passion for Growth
            </h1>
            <p className="text-white text-xl font-light">
              Empowering Futures, Creating Opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

