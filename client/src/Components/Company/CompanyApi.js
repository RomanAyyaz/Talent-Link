export const getShortlistedCandidatesData = async ()=>{
    let response = await fetch(`http://localhost:8000/job/candidateShortlist`,{
        method:"GET"
    })
    if(!response.ok){
        let errorResponse = await response.json()
        throw new Error(errorResponse.message || 'Network response was not ok')
    }
    return response.json();
}
