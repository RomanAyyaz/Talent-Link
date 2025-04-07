//Api to get the data of shortlisted candidates
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


//Api to delete the company 

export const deleteCompanyApi = async ({ id, password }) => {
    let response = await fetch(`http://localhost:8000/company/deleteCompany/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
    const data = await response.json();
    return data;
  };
  
//Api to get the notifications of a company 

export const getNotifications = async (id)=>{
  console.log('id',id)
  let response = await fetch(`http://localhost:8000/company/notification/${id}`,{
      method:"GET"
  })
  if(!response.ok){
      let errorResponse = await response.json()
      throw new Error(errorResponse.message || 'Network response was not ok')
  }
  return response.json();
}
