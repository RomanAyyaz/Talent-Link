
//Api to get the data of all the courses 

export const getAllCoursesData = async () =>{
    const response = await fetch('http://localhost:8000/user/courses',{
        method:"GET"
    })
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Network response was not ok');
      }
      return response.json();
}

//Api for getting the data of specific Course

export const getDataOfCourseApi = async (id)=>{
    
    const response = await fetch (`http://localhost:8000/user/courseData/${id}`,{
        method:'GET'
    }) 
    const data = await response.json();
    return data;
}