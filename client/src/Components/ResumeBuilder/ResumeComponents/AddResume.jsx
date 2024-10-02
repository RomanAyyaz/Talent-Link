import { useMutation } from '@tanstack/react-query';
import React,{useState} from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { AddResumeApi } from '../ResumeApis/ResumeApi';
import { useResumeIdStore } from '../../../Store/ResumeIdStore';
import { useNavigate } from 'react-router-dom';
function AddResume() {
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);
    const [Title,setTitle] = useState()

    const {resumeId,setResumeId} = useResumeIdStore()

    //Api Calling for Resume Title
    const AddResumeMutation = useMutation({
      mutationFn:AddResumeApi,
      onSuccess: (data) => {
        const newResumeId = data.data._id;
        setResumeId(newResumeId);
        navigate(`/resume/${newResumeId}/edit`);
        console.log('title submitted successfully');
      },
      onError:()=>{
        console.log('Some error in title submision')
      }
    })
  return (
    <div>
      <div className='border flex justify-center items-center p-14 bg-gray-100 py-24 h-[280px]
      rounded-lg hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed' 
      onClick={()=>{setIsOpen(true)}}>
        <BsPlusSquare/>
      </div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white rounded-lg shadow-lg w-2/5 p-4">
            <h2 className="text-xl font-bold">Create New Resume</h2>
            <p className='text-md text-neutral-500 mt-1'>Add a title for your new resume</p>
            <input type="text" name="title" id="" placeholder='Ex.Full Stack resume' 
            onChange={(e)=>{
              setTitle(e.target.value)
            }} className='
            w-full p-1 border rounded-md my-3 focus:border-purple-500 focus:outline-none' />
            <div className='flex justify-end items-center gap-2'>
              <button className='px-3 py-2 rounded-md hover:bg-gray-100 ' onClick={()=>{setIsOpen(false)}}>Cancel</button>
              <button className='bg-purple-600 text-white px-3 py-2 rounded-md' onClick={()=>{
                AddResumeMutation.mutate({title:Title})
              }} >Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddResume