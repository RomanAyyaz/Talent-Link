const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


//Api for Adding preferences 
export const addPrefApi = async({values , id})=>{
    let response = await fetch(`${API_BASE_URL}/jobCopilot/addPref/${id}`,{
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