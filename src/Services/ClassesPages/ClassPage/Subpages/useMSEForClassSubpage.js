import { reactive, onMounted } from 'vue';
import axiosInstance from '@/Axios/Axios.js';
import router from '@/router/router.js'


export function useMSEForClassSubpage() {
    const state = reactive({
        "todayMSEForClass": [],
    })

    onMounted(async () => {
        await fetchMSEForClassSubpage();
    });

    const fetchMSEForClassSubpage = async () => {
        let currentClassId = parseInt(router.currentRoute.value.params.classId)
        if(isNaN(currentClassId)) {
            router.push({ path: '/classes/' });
        }
    
        await axiosInstance.get("http://80.78.251.54:7300/api/Teacher/MSEForClassPage", {
            params: {
                classId: currentClassId
            }
        })
        .then((response) => {
            console.log(response.data.todayMSEForClass)
            state.todayMSEForClass = response.data.todayMSEForClass;
        })
    };

    return { state, fetchMSEForClassSubpage}
}