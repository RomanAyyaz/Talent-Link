export const getDataOfQuizApi = async (id)=>{
    const response = await fetch (`http://localhost:8000/quiz/quiz`,{
        method:'GET'
    }) 
    const data = await response.json();
    return data;
}
//Api for sending the quiz data to backend 

export const AddQuizApi = async (values) =>{
    console.log(values)
    let response = await fetch (`http://localhost:8000/quiz/quizData`,{
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
