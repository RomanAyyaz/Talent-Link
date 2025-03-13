"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-bgFooter py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-3">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">J</span>
              </div>
              <span className="ml-2 text-2xl font-bold">
                Talent <span className="text-green-500">Link</span>
              </span>
            </div>
            <p className="text-gray-500 text-base leading-relaxed">
              Whether you're an experienced professional or a fresh graduate eager to dive into the workforce, we have
              something for everyone.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 lg:ml-8 text-start">
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul className="space-y-4 text-start">
              <li>
                <a href="#" className="text-gray-500 hover:text-green-500">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-green-500">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-green-500">
                  Blog & News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-green-500">
                  FAQ Question
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-green-500">
                  Job Alerts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-6 text-start">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-500">2715 Ash Dr. San Jose, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-500">+(61) 545-432-234</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-500">talentlink@gmail.com</span>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-start">Social Link</h3>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 5C11.4477 5 11 5.44772 11 6V8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8V6C13 5.44772 12.5523 5 12 5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 15C11.4477 15 11 15.4477 11 16V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V16C13 15.4477 12.5523 15 12 15Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H8C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11H6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H16Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-6">Subscribe Our Newsletter</h3>
            <p className="text-gray-500 mb-6">Subscribe Our Newsletter get Update our New Course</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-md w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-gray-200 text-center text-gray-500">
          <p>Copyright © 2024 All Rights Reserved by Talent Link</p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}

export default Footer

