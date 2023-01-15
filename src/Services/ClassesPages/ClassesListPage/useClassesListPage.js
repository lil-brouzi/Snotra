import { reactive, onMounted } from 'vue';
import axiosInstance from '@/Axios/Axios.js';

export function useClassesPage() {
    const state = reactive({
        "schoolClassesCEM": [],
    })

    onMounted(async () => {
        await fetchClasses();
    });

    const fetchClasses = async () => {
        await axiosInstance.get("http://80.78.251.54:7300/api/Teacher/SchoolClassesPage", {
           
        })
        .then((response) => {
            console.log(response)
            state.schoolClassesCEM = response.data.schoolClassesCEM;
        })
    };

    return { state, fetchClasses }
}

