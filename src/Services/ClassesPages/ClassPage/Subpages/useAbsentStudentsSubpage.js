import { reactive, onMounted } from 'vue';
import router from '@/router/router.js'
import axiosInstance from '@/Axios/Axios.js';

export function useAbsentStudentsSubpage() { 
    const state = reactive ({
        "studentsStatuses": []
    })

    onMounted(async () => {
        await fetchAbsentStudents();
    });

    const fetchAbsentStudents = async () => {
        let currentClassId = parseInt(router.currentRoute.value.params.classId)
        if(isNaN(currentClassId)) {
            router.push({ path: '/classes/' });
        }
    
        await axiosInstance.get("http://80.78.251.54:7300/api/Teacher/ClassStudentsByStatusesPage", {
            params: {
                classId: currentClassId
            }
        })
        .then((response) => {
            console.log(response.data)
            state.studentsStatuses = response.data.studentsStatuses;
        })
    };

    return { state, fetchAbsentStudents }

}
