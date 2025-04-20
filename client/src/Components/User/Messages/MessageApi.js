//Api to get the messages of a company that has send to user 
export const getMessageOfCompanies = async (id)=>{
    let userId = id
    const response = await fetch (`http://localhost:8000/user/companyMessageData/${userId}`,{
        method:'GET'
    }) 
    const data = await response.json();
    return data;
}

//Api to get the messages between user and company 

export const getMessageOfCompanyAndUser = async ({id , companyId})=>{
    let userId = id
    const response = await fetch (`http://localhost:8000/user/UserCompanyMessage/${userId}/${companyId}`,{
        method:'GET'
    }) 
    const data = await response.json();
    return data;
}