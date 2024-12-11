//Api for Adding Company Information

export const addCompanyInformation = async ({values,id}) =>{
    console.log('api id',id)
    console.log('api values',values)
    let response = await fetch (`http://localhost:8000/company/companyInformation/${id}`,{
        method:'PUT',
        body:values
    })
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Network response was not ok');
      }
      return response.json();
}

//Api for Adding Company Business Overview

export const addCompanyBusinessOverviewApi = async ({values,id}) =>{
    let response = await fetch (`http://localhost:8000/company/companyBusinessOverview/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(values)
    })
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Network response was not ok');
      }
      return response.json();
}

//Api for Adding Company Business Overview

export const addSocialMediaLinksApi = async ({values,id}) =>{
    let response = await fetch (`http://localhost:8000/company/socialMediaLinks/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(values)
    })
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Network response was not ok');
      }
      return response.json();
}

//Api for Adding Company Representatives

export const addCompanyRepresentativesApi = async ({values,id}) =>{
    let response = await fetch (`http://localhost:8000/company/representatives/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(values)
    })
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Network response was not ok');
      }
      return response.json();
}

//Api for Adding Company projects

export const addCompanyProjectsApi = async ({ formData, id }) => {
    let response = await fetch(`http://localhost:8000/company/projects/${id}`, {
      method: 'PUT',
      body: formData
    });
  
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Network response was not ok');
    }
    return response.json();
  };
  