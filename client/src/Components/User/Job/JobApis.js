//api for getting all the jobs 
export const getAllJobsApi = async ()=>{
    let response = await fetch('http://localhost:8000/job/allJobs',{
        method:"GET"
    })
    if(!response.ok){
        let errorResponse = await response.json()
        throw new Error(errorResponse.message || 'Network response was not ok')
    }
    return response.json();
}