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