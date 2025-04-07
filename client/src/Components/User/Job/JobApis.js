const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//api for getting all the jobs 
export const getAllJobsApi = async ()=>{
    let response = await fetch(`${API_BASE_URL}/job/allJobs`,{
        method:"GET"
    })
    if(!response.ok){
        let errorResponse = await response.json()
        throw new Error(errorResponse.message || 'Network response was not ok')
    }
    return response.json();
}
//Api for adding the the job application
export const addJobApplicationApi = async(valuess)=>{
    let response = await fetch(`${API_BASE_URL}/job/addApplication`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(valuess)
    })
    if(!response.ok){
        let errorResponse = await response.json()
        throw new Error(errorResponse.message || 'Network response was not ok')
    }
    return response.json()
}
//Api for adding the the job application
export const hasUserAppliedApi = async({userId , jobId})=>{
    let response = await fetch(`${API_BASE_URL}/job/hasApplied/${userId}/${jobId}`,{
        method:"GET",
    })
    const data = await response.json();
    return data;
}

//Api for job Alert 
export const jobAlertApi = async(values)=>{
    console.log(values)
    let response = await fetch(`${API_BASE_URL}/job/subscribe`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(values)
    })
    if(!response.ok){
        let errorResponse = await response.json()
        throw new Error(errorResponse.message || 'Network response was not ok')
    }
    return response.json()
}

//Api for getting the data of a specific job 

export const getDataOfJobApi = async (id)=>{
    const response = await fetch (`http://localhost:8000/job/jobData/${id}`,{
        method:'GET'
    }) 
    const data = await response.json();
    return data;
}