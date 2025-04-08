"use client"

import { useState } from "react"
import {
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Building,
  Briefcase,
  Mail,
  Phone,
  MessageSquare,
  Facebook,
  Linkedin,
  User,
  ExternalLink,
  Check,
} from "lucide-react"

export default function CompanyProfile() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)
      setIsSubmitted(true)
      setFormData({ email: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8 px-4 max-w-7xl">
        {/* Company Header */}
        <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
          {/* Banner Image */}

          <div className="relative h-48 w-full bg-gradient-to-r from-green-600 to-green-400">
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-10 h-full">
                {[...Array(100)].map((_, i) => (
                  <div key={i} className="aspect-square border border-white/10"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center relative">
            {/* Company Logo */}
            <div className="bg-white rounded-xl shadow-md w-32 h-32 flex items-center justify-center border-4 border-white absolute top-0 transform -translate-y-1/2 left-8">
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                <path
                  d="M65.4,50.3c-3.5,0-6.7-1.5-9.6-3.8l0.7-3.4l0,0c0.7-3.8,2.7-10.1,9-10.1c4.7,0,8.6,3.9,8.6,8.6
                  C74,46.4,70.1,50.3,65.4,50.3z M65.4,22.9c-8.8,0-15.6,5.7-18.4,15.1c-4.2-6.3-7.4-13.9-9.3-20.2h-9.5v24.4
                  c0,4.4-3.6,8-8,8c-4.4,0-8-3.6-8-8V17.8h-9.5v24.4c0,9.7,7.9,17.6,17.6,17.6c9.7,0,17.6-7.9,17.6-17.6V39
                  c1.8,3.8,4.1,7.6,6.8,10.9l-5.8,27.2h9.7l4.2-19.8c3.6,2.3,7.8,3.7,12.6,3.7c10.2,0,18.5-8.3,18.5-18.5
                  C83.9,31.2,75.6,22.9,65.4,22.9z"
                  fill="#37A000"
                />
              </svg>
            </div>

            {/* Company Info */}
            <div className="mt-16 md:mt-0 md:ml-36">
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Upwork Inc.</h1>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded w-fit">
                  Verified
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-gray-500 mt-2">
                <span className="font-medium">Freelancing Platform</span>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-green-500" />
                  <span>New York, USA</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1 text-green-500" />
                  <span>1000+ Employees</span>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="md:ml-auto mt-4 md:mt-0">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center">
                Apply This Position
                <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div> 

        </div>

        {/* Company Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* About Company Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  About Company
                  <span className="ml-3 bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Est. 1999
                  </span>
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Upwork began over two decades ago by pioneering a better way of working, helping businesses find
                    more flexibility and connecting talent with more opportunities. Our mission to create economic
                    opportunities so people have better lives has taken us so much further. As a result, we've become
                    the world's work marketplace where every day businesses of all sizes and independent talent from
                    around the globe meet here to accomplish incredible things.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Like for so many, Upwork has had a big impact on my life. I first came to this company on the
                    product team and over the years have understood what makes this platform really work: the
                    relationships.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">We see what you do</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I have personally seen the passion and commitment that every user puts into their work here. Whether
                    it's a quick powerpoint presentation or a multi-year development project - both talent on Upwork and
                    our clients care about doing really good work because they love what they do.
                  </p>
                </div>
              </div>
            </div>

            {/* Office Gallery Section */}
           
          </div>

          {/* Job Overview Section */}
          <div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Overview</h2>

                <div className="space-y-5">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 shrink-0">
                      <Calendar className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-500 text-sm">Founded in</span>
                      <p className="text-gray-900 font-medium">10 July, 1999</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 shrink-0">
                      <Users className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-500 text-sm">Team Size</span>
                      <p className="text-gray-900 font-medium">1000+ Employees</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 shrink-0">
                      <DollarSign className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-500 text-sm">Revenue</span>
                      <p className="text-gray-900 font-medium">$500M+ (2023)</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 shrink-0">
                      <MapPin className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-500 text-sm">Headquarters</span>
                      <p className="text-gray-900 font-medium">New York, USA</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 shrink-0">
                      <Briefcase className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-500 text-sm">Industry</span>
                      <p className="text-gray-900 font-medium">Freelancing Platform</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 shrink-0">
                      <Building className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-500 text-sm">Global Offices</span>
                      <p className="text-gray-900 font-medium">10+ Locations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team and Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Team Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Team Member 1 */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group">
                    <div className="relative aspect-square">
                      <img
                        src="/placeholder.svg?height=400&width=400"
                        alt="Al Amin Bali"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold text-gray-900">Al Amin Bali</h3>
                      <p className="text-green-600 font-medium mb-3">Chief Design Officer</p>
                      <div className="flex justify-center space-x-3">
                        <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                          <User className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Team Member 2 */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group">
                    <div className="relative aspect-square">
                      <img
                        src="/placeholder.svg?height=400&width=400"
                        alt="Jonathon Doe"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold text-gray-900">Jonathon Doe</h3>
                      <p className="text-green-600 font-medium mb-3">Chief Product Officer</p>
                      <div className="flex justify-center space-x-3">
                        <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                          <User className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Team Member 3 */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group">
                    <div className="relative aspect-square">
                      <img
                        src="/placeholder.svg?height=400&width=400"
                        alt="Emma Elizabeth"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold text-gray-900">Emma Elizabeth</h3>
                      <p className="text-green-600 font-medium mb-3">Chief Technology Officer</p>
                      <div className="flex justify-center space-x-3">
                        <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                          <User className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
                    <button
                      className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          id="phone"
                          type="text"
                          value="(+88)154-678789"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                          readOnly
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write your message here..."
                          rows={5}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex justify-center items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md mt-2">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Office Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-sm relative aspect-video group">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Office meeting area with chairs"
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-sm relative aspect-video group">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Office hallway with glass partitions"
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-sm relative aspect-video group">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Office lounge with view"
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}
