import { create } from 'zustand';

interface FormData {
    startupName: string;
    userType: string;
}

interface FormStore {
    formData: FormData;
    updateFormData: (data: Partial<FormData>) => void;
    resetForm: () => void;
}

export const useFormStore = create<FormStore>()((set) => ({
    formData: {
        startupName: '',
        userType: '',
    },
    updateFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
    resetForm: () => set({ formData: { startupName: '', userType: '' } }),
}));
