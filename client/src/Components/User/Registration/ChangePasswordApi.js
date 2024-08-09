//Api for sending otp 
export let OtpSentApi = async (values)=>{
    let response = await fetch('http://localhost:8000/user/otpsent',{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(values)
    })
    if (!response.ok) {
       let errorResponse = await response.json()
       throw new Error(errorResponse.error || 'Network response was not ok');
      }
      return response.json();
}
