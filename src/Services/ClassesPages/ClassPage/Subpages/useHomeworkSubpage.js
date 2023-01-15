import { reactive, onMounted } from 'vue';
import router from '@/router/router.js'
import axiosInstance from '@/Axios/Axios.js';

export function useHomeworkSubpage() { 
    const state = reactive ({
        "homeworks": []
    })

    onMounted(async () => {
        await fetchHomework();
    });

    const fetchHomework = async () => {
        let currentClassId = parseInt(router.currentRoute.value.params.classId)
        if(isNaN(currentClassId)) {
            router.push({ path: '/classes/' });
        }
    
        await axiosInstance.get("http://80.78.251.54:7300/api/Teacher/HomeworkListForClassPage", {
            params: {
                classId: currentClassId
            }
        })
        .then((response) => {
            console.log(response.data.homeworks)
            state.homeworks = response.data.homeworks;
        })
    };

    return { state, fetchHomework}

}
