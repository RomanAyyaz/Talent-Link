import {create} from 'zustand'

export const useCompanyIdStore = create((set)=>({
    companyId:null,
    setCompanyId:(Id)=>set({companyId:Id})
}))