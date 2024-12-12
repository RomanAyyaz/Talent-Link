
//Api for adding a new Course

export const AddCourseApi = async (values) => {
    let response = await fetch('http://localhost:8000/course/add-course',{
        method: "POST",
        body: values 
    })

    if(!response.ok){
        let errorResponse = await response.json()
        throw new Error(errorResponse.message || 'Network response was not ok')
    }
    return response.json()
}

//Api for getting the data of specific Course

export const getDataOfCourseApi = async (id)=>{
    const response = await fetch (`http://localhost:8000/course/courseData/${id}`,{
        method:'GET'
    }) 
    const data = await response.json();
    return data;
}


//Api for adding the lecture of the specific Course

export const addLectureApi = async ({ values, id }) => {
    console.log('v',values)
    const response = await fetch(`http://localhost:8000/course/add-Lecture/${id}`, {
      method: 'PUT',
      body: values 
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Network response was not ok');
    }
    return response.json();
  };

//Api for adding the lecture of the specific Course

export const deleteLessonApi = async ({ values, id }) => {
    const response = await fetch(`http://localhost:8000/course/delete-lecture/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lessonId: values }), // Send the lesson ID in the body as JSON
    });
    
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Network response was not ok');
    }
    return response.json();
  };
  