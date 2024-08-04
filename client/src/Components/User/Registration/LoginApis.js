
//Api for Signup
export let SignupApi = async (values)=>{
    let response = await fetch('http://localhost:8000/user/signup',{
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

//Api For signin

export let SigninApi = async (values)=>{
    let response = await fetch('http://localhost:8000/user/signin',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify(values)
    })
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
}

//Api for Otp Verification
export let OtpVerificationApi = async (UserData)=>{
    let response = await fetch ('http://localhost:8000/user/otpVerification',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(UserData)
    })
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
}