import { reactive, onMounted } from 'vue';
import axiosInstance from '@/Axios/Axios.js';
import router from '@/router/router.js'

export function useUSEForClassSubpage() {
    const state = reactive({
        "usEsForClass": [], 
    })

    const DaysOfWeek = reactive({
        'Понедельник': 'monday', 'Вторник': 'tuesday', 'Среда': 'wednesday', 'Четверг': 'thursday', 'Пятница': 'friday', 'Суббота': 'saturday'
    })

    const FindUCISForDayOfWeek = (dayOfWeek) => {
        return state.usEsForClass[dayOfWeek];
    }

    const FindUSPByNumAndDayOfWeek = (num, dayOfWeek) => {
        return state.usEsForClass[dayOfWeek].find(e => e.num === num);
    }

    onMounted(async () => {
        await fetchUSEForClassSubpage();
    });

    const fetchUSEForClassSubpage = async () => {
        let currentClassId = parseInt(router.currentRoute.value.params.classId)
        if(isNaN(currentClassId)) {
            router.push({ path: '/classes/' });
        }
    
        await axiosInstance.get("http://80.78.251.54:7300/api/Teacher/USEForClassPage", {
            params: {
                classId: currentClassId
            }
        })
        .then((response) => {
            console.log(response.data.usEsForClass)
            state.usEsForClass = response.data.usEsForClass;
        })
    };

    return { state, fetchUSEForClassSubpage, DaysOfWeek, FindUCISForDayOfWeek, FindUSPByNumAndDayOfWeek }
}