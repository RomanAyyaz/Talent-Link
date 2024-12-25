
//Api for posting the job

export const postJobApi = async(values)=>{
    let response = await fetch('http://localhost:8000/job/postJob',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(values)
    })
    if(!response.ok){
        let errorResponse = await response.json()
        throw new Error(errorResponse.message || 'Network response was not ok')
    }
    return response.json()
}

//Api calling for getting all the jobs of that specific company 

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

//Api  for deleting the job

export const deleteJobApi = async (id)=>{
    let response = await fetch(`http://localhost:8000/job/deleteJob/${id}`,{
        method:"DELETE"
    })
    const data = await response.json();
     return data;
}

//Api for getting the data of the specific job

export const getJobData = async(id)=>{
    let response = await fetch(`http://localhost:8000/job/jobData/${id}`,{
        method:'GET'
    })
    if(!response.ok){
        let errorResponse = await response.json()
        throw new Error(errorResponse.message || 'Network response was not ok')
    }
    return response.json();
}

//Api for updating the data of job 

export const updateJobData = async(values)=>{
    let response = await fetch('http://localhost:8000/job/updateJob',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(values)
    })
    if(!response.ok){
        let errorResponse = await response.json()
        throw new Error(errorResponse.message || 'Network response was not ok')
    }
    return response.json()
}