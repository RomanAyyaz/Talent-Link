
//Api calling for posting the job

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