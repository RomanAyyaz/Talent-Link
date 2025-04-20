import {create} from 'zustand'

export const useDarkModeStore = create((set)=>({
    mode:'light',
    setMode:(newMode)=>set({mode:newMode})
}))