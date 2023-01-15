import { reactive, onMounted } from 'vue';
import router from '@/router/router.js'
import axiosInstance from '@/Axios/Axios.js';

export function useAllStudentsSubpage() { 
    const state = reactive({
        "students": []
    })

    onMounted(async () => {
        await fetchAllStudents();
    });

    const fetchAllStudents = async () => {
        let currentClassId = parseInt(router.currentRoute.value.params.classId)
        if(isNaN(currentClassId)) {
            router.push({ path: '/classes/' });
        }

        await axiosInstance.get("http://80.78.251.54:7300/api/Teacher/AllStudentsOfClassPage", {
            params: {
                classId: currentClassId
            }
        })
        .then((response) => {
            console.log(response.data)
            state.students = response.data.students;
        })
    };

    return { state, fetchAllStudents }
}