import React, { useContext , useState } from 'react'
import { AIChatSession } from '../../../../Service/AiModel'
import { ResumeInfoContext } from '../../../../Context/ResumeInfoContext'

function Summery() {
    const {resumeInfo} = useContext(ResumeInfoContext)
    const [aiGeneratedSummeryList,setAiGenerateSummeryList]=useState();
    const prompt="Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format"
    const generateSummeryFromAi = async ()=>{
        const PROMPT = prompt.replace('{jobTitle}',resumeInfo.jobTitle)
        const result = await AIChatSession.sendMessage(PROMPT);
        console.log(JSON.parse(result.response.text()))
        setAiGenerateSummeryList(JSON.parse(result.response.text()))
    }
    console.log(aiGeneratedSummeryList)
  return (
    <div>
        <div className='text-start px-3.5 py-4 shadow-lg rounded-lg border-t-4 border-t-purple-600 mt-10'>
        <h2 className='font-bold text-lg'>Summery</h2>
        <p>Add Summery for job title </p>
        <div className='mt-3 flex justify-between items-center'>
            <h2 className='font-bold'>Add Summery</h2>
            <button type='button' className='border border-purple-600 px-2 py-1 bg-white rounded-md text-purple-600
            hover:bg-gray-100 hover:text-black' onClick={()=>{
                generateSummeryFromAi()
            }} >Generate From AI</button>
        </div>
        <form action="">
            <textarea name="summery"  rows='3' id="" className='border rounded-md w-full mt-2'></textarea>
        </form>
        <div className='flex justify-end w-full mt-3'>
                        <button className='text-white px-2.5 py-1 rounded-md bg-purple-600'>Save</button>
        </div>
        </div>
        {aiGeneratedSummeryList&& <div className='my-5'>
            <h2 className='font-bold text-lg'>Suggestions</h2>
            {aiGeneratedSummeryList.map((item,index)=>(
                <div key={index} 
                className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
                    <h2 className='font-bold my-1 text-primary'>Level: {item.experience_level}</h2>
                    <p>{item.summary}</p>
                </div>
            ))}
        </div>}
    </div>
  )
}

export default Summery