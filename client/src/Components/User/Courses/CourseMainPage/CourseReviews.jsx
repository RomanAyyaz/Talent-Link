"use client";

import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getReviewApi, submitReviewApi } from "../CoursesApi";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../../../Store/UserStore";
import ReviewCard from "./ReviewCard";

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CourseReviews() {
  const { id } = useParams();
  let [review, setReview] = useState();
  const { user, setUser } = useUserStore();
  const{data,isLoading , isError} = useQuery({
    queryKey:['course',id],
    queryFn:()=>getReviewApi(id)
  })
  const addReviewMutation = useMutation({
    mutationFn: submitReviewApi,
    onSuccess: () => {
      console.log("review submitted successfully");
    },
    onError: () => {
      console.log("some error in submiting a review");
    },
  });
  const reviewData = {
    comment: review,
    user: user._id,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addReviewMutation.mutate({ id: id, values: reviewData });
    setReview("");
  };
  if (isLoading) {
    return <div>Data Loading...</div>; // Return loading message
  }
  
  if (isError) {
    return <div>Some error loading data</div>; // Return error message
  }
  console.log("Reviews Data:", data.data);
  return (
    <>
      <div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex justify-center item-center my-3"
        >
          <input
            type="text"
            value={review}
            className="border py-1 px-3 w-1/2  rounded-md  "
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
          <button
            type="submit"
            className="mx-2 bg-green-500 p-2 rounded-md text-white"
          >
            Submit Review
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-2 p-4 item-center justify-center">

        {/* {reviewsData?.map((review) => (
          <div className="w-2/5" key={review.id}>
            <ReviewCard review={review} />
          </div>
        ))} */}
      </div>
    </>
  );
}
