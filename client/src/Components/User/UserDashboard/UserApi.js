//api for updating the user profile 
export let updateUserProfileApi = async ({values,id})=>{
    let response = await fetch(`http://localhost:8000/user/updateUser/${id}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(values)
    })
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
}
//api for adding user portfolio

export const addUserProjectsApi = async ({ formData, id }) => {
    let response = await fetch(`http://localhost:8000/user/projects/${id}`, {
      method: 'PUT',
      body: formData
    });
  
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Network response was not ok');
    }
    return response.json();
  };