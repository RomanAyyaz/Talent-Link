
//Api for Signup
export let SignupApi = async (values)=>{
    let response = await fetch('http://localhost:8000/user',{
        method:"POST",
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