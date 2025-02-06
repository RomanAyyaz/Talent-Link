"use client"

import { useState } from "react"

// Dummy review data
const reviews = [
  {
    id: 1,
    author: "Eitan M.",
    initials: "EM",
    rating: 5,
    timeAgo: "4 weeks ago",
    content:
      "The course is very good, Jonas talks about everything in JavaScript, and I have watched the whole course twice and learned new things every time.",
  },
  {
    id: 2,
    author: "Sarah K.",
    initials: "SK",
    rating: 5,
    timeAgo: "2 weeks ago",
    content:
      "Excellent content and clear explanations. The practical examples really helped cement my understanding of JavaScript concepts.",
  },
  {
    id: 3,
    author: "Michael R.",
    initials: "MR",
    rating: 4,
    timeAgo: "1 month ago",
    content:
      "Very comprehensive course material. The exercises are challenging but really help you learn the concepts in depth.",
  },
  {
    id: 4,
    author: "Jessica T.",
    initials: "JT",
    rating: 5,
    timeAgo: "3 weeks ago",
    content:
      "One of the best programming courses I've taken. The instructor's teaching style makes complex topics easy to understand.",
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex gap-4 p-6 bg-gray-100 rounded-lg shadow-sm">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-semibold">
          {review.initials}
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">{review.author}</h3>
            <div className="flex items-center gap-2 mt-1">
              <StarRating rating={review.rating} />
              <span className="text-gray-600 text-sm">{review.timeAgo}</span>
            </div>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-700 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  Report Review
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  Share Review
                </button>
              </div>
            )}
          </button>
        </div>
        <p className="mt-3 text-gray-600">{review.content}</p>
      </div>
    </div>
  )
}

export default function CourseReviews() {
  return (
    <div className="flex flex-wrap gap-2 p-4 item-center justify-center">
      {reviews.map((review) => (
        <div className="w-2/5" key={review.id}>
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  )
}
