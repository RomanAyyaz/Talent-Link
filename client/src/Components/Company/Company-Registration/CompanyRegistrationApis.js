//Api for Company registration
export let companyRegistrationApi = async (values)=>{
    let response = await fetch('http://localhost:8000/company/registerCompany',{
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
//Api for Otp Verification
export let companyOtpVerificationApi = async (UserData)=>{
    let response = await fetch ('http://localhost:8000/company/otpVerification',{
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

//Api For signin

export let companySigninApi = async (values)=>{
    let response = await fetch('http://localhost:8000/company/companySignIn',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify(values)
    })
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Network response was not ok');
      }
      return response.json();
}