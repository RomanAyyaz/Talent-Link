
//Api to get the data of all the courses 

export const getAllCoursesData = async () => {
    const response = await fetch('http://localhost:8000/user/courses', {
        method: "GET"
    })
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Network response was not ok');
    }
    return response.json();
}

//Api for getting the data of specific Course

export const getDataOfCourseApi = async (id) => {

    const response = await fetch(`http://localhost:8000/user/courseData/${id}`, {
        method: 'GET'
    })
    const data = await response.json();
    return data;
}

//Api for updating the course status

export const updateCourseApi = async (id) => {
    let response = await fetch(`http://localhost:8000/user/updateCourseStatus/${id}`, {
        method: 'PUT',
    })
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Network response was not ok');
    }
}

//Courses search Api

export const searchCoursesApi = async (query)=>{
    console.log(query)
    const response = await fetch(`http://localhost:8000/user/course/search?query=${query}`, {
        method: 'GET'
    })
    const data = await response.json();
    return data;
}

//Api for submmiting the review 

export const submitReviewApi = async ({id , values}) => {
    let response = await fetch(`http://localhost:8000/user/course/review/${id}`, {
        method: 'PUT',
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify(values)
    })
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Network response was not ok');
    }
}

//Courses review search Api

export const getReviewApi = async (id)=>{
    const response = await fetch(`http://localhost:8000/user/reviews/${id}`, {
        method: 'GET'
    })
    const data = await response.json();
    return data;
}