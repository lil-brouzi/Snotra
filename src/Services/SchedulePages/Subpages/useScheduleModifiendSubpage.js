import { reactive, onMounted } from 'vue';
import axiosInstance from '@/Axios/Axios.js';

export function useScheduleModifiendSubpage() {
    const state = reactive({
        "mciSesForToday": [],
        "scheduleVersions": [],
        "msPsForToday": []
    })

    onMounted(async () => {
        await fetchScheduleModifiend();
    });

    const FindMSPByNum = (num) => {
        return state.msPsForToday.find(e => e.num === num);
    }

    const fetchScheduleModifiend = async () => {
        await axiosInstance({
            method: 'post',
            url: 'http://80.78.251.54:7300/api/Teacher/SchedulePageModified',
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
            state.mciSesForToday = response.data.mciSesForToday;
            state.scheduleVersions = response.data.scheduleVersions;
            state.msPsForToday = response.data.msPsForToday;
        })
    };

    return { state, fetchScheduleModifiend, FindMSPByNum }
}