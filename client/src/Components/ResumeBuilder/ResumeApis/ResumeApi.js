//Api for Adding Resume
export const AddResumeApi = async (data) =>{
    let response = await fetch('http://localhost:8000/user/Resume',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Network response was not ok');
      }
      return response.json();
}

//Api for Adding Personal details 

export const addPersonalDetailsApi = async ({values,id}) =>{
    let response = await fetch (`http://localhost:8000/user/Resume/${id}/personaldetail`,{
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

//Api for Adding Summery 

export const addSummeryApi = async (values) =>{
    let response = await fetch (`http://localhost:8000/user/Resume/${values.id}/summery`,{
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

//Api for adding Experience 
export const AddExperienceApi = async ({values,id}) =>{
    let response = await fetch (`http://localhost:8000/user/Resume/${id}/experience`,{
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

//Api for Changing theme 
export const ChangeThemeApi = async (values,id) =>{
    console.log(id , values)
    let response = await fetch (`http://localhost:8000/user/Resume/${id}/theme`,{
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

//Api for adding Education 
export const AddEducationApi = async ({values,id}) =>{
    let response = await fetch (`http://localhost:8000/user/Resume/${id}/education`,{
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

//Api for adding Certification
export const addProjectApi = async ({values,id}) =>{
    let response = await fetch (`http://localhost:8000/user/Resume/${id}/project`,{
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

//Api for adding Certification
export const addCertificationApi = async ({values,id}) =>{
    let response = await fetch (`http://localhost:8000/user/Resume/${id}/certification`,{
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

//Api for adding Skills
export const AddSkillsApi = async ({values,id}) =>{
    let response = await fetch (`http://localhost:8000/user/Resume/${id}/skills`,{
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

//Api for getting the data of specific Resume

export const getDataOfResumeApi = async (id)=>{
    const response = await fetch (`http://localhost:8000/user/Resume/${id}`,{
        method:'GET'
    }) 
    const data = await response.json();
    return data;
}

//Api for getting all the resumes 

export const getAllResumes = async (userId) =>{
    let response = await fetch (`http://localhost:8000/user/Resume?userId=${userId}`,{
        method:'GET',
    })
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Network response was not ok');
      }
      return response.json();
}

//Api for deleting the resume  

export const deleteResumes = async (id) =>{
    let response = await fetch (`http://localhost:8000/user/Resume/${id}`,{
        method:'DELETE',
    })
    const data = await response.json();
    return data;
}