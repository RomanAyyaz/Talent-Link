import React, { useContext , useState } from 'react'
import { AIChatSession } from '../../../../Service/AiModel'
import { ResumeInfoContext } from '../../../../Context/ResumeInfoContext'
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { addSummeryApi } from '../../ResumeApis/ResumeApi';

function Summery() {
    const {resumeInfo} = useContext(ResumeInfoContext)
    const [aiGeneratedSummeryList,setAiGenerateSummeryList]=useState();

    //Extracting id from utl 
    let {id} = useParams()

    // State for summery 
    const [summery,setSummery] = useState()

    //Generate Summery from Ai
    const prompt="Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format"
    const generateSummeryFromAi = async ()=>{
        const PROMPT = prompt.replace('{jobTitle}',resumeInfo.jobTitle)
        const result = await AIChatSession.sendMessage(PROMPT);
        console.log(JSON.parse(result.response.text()))
        setAiGenerateSummeryList(JSON.parse(result.response.text()))
    }

    //Data for the Api 
    const values = {summery:summery,id:id}
    //Api Calling for Adding summery 

    const addSummeryMutation = useMutation({
        mutationFn:addSummeryApi,
        onSuccess:()=>{
            console.log('Summery added successfully')
        },
        onError:()=>{
            console.log("Error in adding summery")
        }
    })

    //Form submiting method
    const handleSubmit = (e)=>{
        e.preventDefault()
        addSummeryMutation.mutate(values)
        setSummery('')
    }
  return (
    <div>
        <div className='text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10'>
        <h2 className='font-bold text-lg'>Summery</h2>
        <p>Add Summery for job title </p>
        <div className='mt-3 flex justify-between items-center'>
            <h2 className='font-semiboldx'>Add Summery</h2>
            <button type='button' className='border border-purple-600 px-2 py-1 bg-white rounded-md text-purple-600
            hover:bg-gray-100 hover:text-black' onClick={()=>{
                generateSummeryFromAi()
            }} >Generate From AI</button>
        </div>
        <form action="" onSubmit={handleSubmit}>
            <textarea name="summery"  rows='5' id=""
            value={summery}
            className = " p-1 w-full text-sm border rounded-md mt-2 focus:border-purple-500 focus:outline-none"
            onChange={(e)=>{
                setSummery(e.target.value)
            }} ></textarea>
            <div className='flex justify-end w-full mt-3'>
            <button className='text-white px-2.5 py-1 rounded-md bg-purple-600' type='submit'>Save</button>
        </div>
        </form>
        </div>
        {/* {aiGeneratedSummeryList&& <div className='my-5'>
            <h2 className='font-bold text-lg'>Suggestions</h2>
            {aiGeneratedSummeryList.map((item,index)=>(
                <div key={index} 
                className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
                    <h2 className='font-bold my-1 text-primary'>Level: {item.experience_level}</h2>
                    <p>{item.summary}</p>
                </div>
            ))}
        </div>} */}
    </div>
  )
}

export default Summery