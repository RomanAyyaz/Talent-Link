import { useState } from 'react'
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Youtube, Search } from 'lucide-react'
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";
export default function TextNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'HOME', href: '#' },
    { name: 'NEWS', href: '#' },
    { name: 'FEATURES', href: '#', hasDropdown: true },
    { name: 'COURSES', href: '#', hasDropdown: true },
    { name: 'ABOUT', href: '#' },
    { name: 'OUR TEAM', href: '#' },
    { name: 'CONTACT', href: '#' }
  ]

  const socialLinks = [
    { Icon: Facebook, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Youtube, href: '#' }
  ]

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold">
              Talent-Link
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-HeroButtonOne px-3 py-2 text-sm font-bold flex items-center"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="ml-1 h-4 w-4 text-HeroButtonOne" />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-4">
                        <div className="hover:bg-facebook relative text-base p-1 group flex items-center justify-center">
                          <FaFacebookF />
                          {/* <div class="absolute top-5 left-3 mb-2 hidden border border-1 w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
                            Facebook
                          </div> */}
                        </div>
                        <div className="hover:bg-twitter relative text-base p-1 group flex items-center justify-center">
                          <FaTwitter />
                          {/* <div class="absolute top-5 left-3 mb-2 hidden w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
                            Twitter
                          </div> */}
                        </div>
                        <div className="hover:bg-instagram relative text-base p-1 group flex items-center justify-center">
                          <FaInstagram />
                          {/* <div class="absolute top-5 left-3 mb-2 hidden w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
                            Instagram
                          </div> */}
                        </div>
                        <div className="hover:bg-youtube relative text-base p-1 group flex items-center justify-center">
                          <FaYoutube />
                          {/* <div class="absolute top-5 left-3 mb-2 hidden w-max bg-white text-black text-sm px-2 py-1 rounded group-hover:block">
                            Youtube
                          </div> */}
                        </div>
                      </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-between px-5">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium">
                PURCHASE
              </button>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
                <button className="text-gray-600 hover:text-gray-900">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

