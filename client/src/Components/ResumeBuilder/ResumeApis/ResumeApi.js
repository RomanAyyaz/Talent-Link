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