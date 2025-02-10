import {React ,  useState} from 'react'


function ReviewCard({ review }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    console.log('r',review)
    return (
      <div className="flex gap-4 p-6 bg-gray-100 rounded-lg shadow-sm">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-semibold">
            {review.comment}
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{review.author}</h3>
              <div className="flex items-center gap-2 mt-1">
                {/* <StarRating rating={review.rating} /> */}
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

export default ReviewCard

