import {create} from 'zustand'
export const useCourseIdStore = create((set)=>({
    courseId:null,
    setCourseId:(newId)=>set({courseId:newId})
}))