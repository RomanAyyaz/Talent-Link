
//Api for adding a new Course

export const AddCourseApi = async (values) => {
    let response = await fetch('http://localhost:8000/instructor/course',{
        method: "POST",
        body: values 
    })
    if(!response.ok){
        let errorResponse = await response.json()
        throw new Error(errorResponse.message || 'Network response was not ok')
    }
    return response.json()
}