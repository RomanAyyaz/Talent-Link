import {create} from 'zustand'

export const useCompanyStore = create((set)=>({
    company:null,
    setCompany:(newCompany)=>set({company:newCompany})
}))