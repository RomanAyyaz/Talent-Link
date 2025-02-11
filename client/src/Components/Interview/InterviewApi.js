//Api for adding the interview for a specific user 

export const addInterviewApi = async({id,values})=>{
    let response = await fetch(`http://localhost:8000/user/interview/${id}`,{
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