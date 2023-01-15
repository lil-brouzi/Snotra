import { reactive, onMounted } from 'vue';
import axiosInstance from '@/Axios/Axios.js';

export function useScheduleUsualSubpage() {
    const state = reactive({
        "uciSes": [],
        "scheduleVersions": [],
        "usPs": [],  
    })

    const DaysOfWeek = reactive({
        'Понедельник': 'monday', 'Вторник': 'tuesday', 'Среда': 'wednesday', 'Четверг': 'thursday', 'Пятница': 'friday', 'Суббота': 'saturday'
    })

    const FindUCISForDayOfWeek = (dayOfWeek) => {
        return state.uciSes[dayOfWeek];
    }

    const FindUSPByNumAndDayOfWeek = (num, dayOfWeek) => {
        return state.usPs[dayOfWeek].find(e => e.num === num);
    }

    onMounted(async () => {
        await fetchScheduleUsual();
    });

    const fetchScheduleUsual = async () => {
        await axiosInstance({
            method: 'post',
            url: 'http://80.78.251.54:7300/api/Teacher/SchedulePageUsual',
            headers: 'Content-Type: application/json',
            params: {
                teacherId: 'a03ed6b0-3296-4798-ac58-f5c8c34336d7',
            }, data: {
                "mseVer": "string",
                "mspVer": "string",
                "useVer": "string",
                "uspVer": "string"
            }
        })
        .then((response) => {
            console.log(response.data)
            state.uciSes = response.data.uciSes;
            state.scheduleVersions = response.data.scheduleVersions;
            state.usPs = response.data.usPs;
        })
    };

    return { state, fetchScheduleUsual, DaysOfWeek, FindUCISForDayOfWeek, FindUSPByNumAndDayOfWeek }
}