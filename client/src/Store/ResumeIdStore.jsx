import {create} from 'zustand'
export const useResumeIdStore = create((set)=>({
    resumeId:null,
    setResumeId:(newId)=>set({resumeId:newId})
}))