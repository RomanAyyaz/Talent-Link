import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { updateCourseApi } from "../User/Courses/CoursesApi";

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const queryClient = useQueryClient()
  //Courses status updation mutation api 
  const courseStatusUpdateMutation = useMutation({
    mutationFn:updateCourseApi,
    onSuccess:()=>{
      queryClient.invalidateQueries('course')
      console.log('Course status has been updated')
    },
    onError:()=>{
      console.log('some error on updating course status')
    }
  })
  useEffect(() => {
    const fetchCourseAndUpdate = async () => {
      if (!sessionId) return;

      try {
       
        const response = await fetch(`http://localhost:8000/user/checkout-session/${sessionId}`);
        const data = await response.json();
        if (data.courseId) {
         courseStatusUpdateMutation.mutate(data.courseId)

          console.log("Course updated successfully!");
        }
      } catch (error) {
        console.error("Error fetching session details:", error);
      }
    };

    fetchCourseAndUpdate();
  }, [sessionId]);

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Your course has been updated.</p>
    </div>
  );
};

export default Success;
