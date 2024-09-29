
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