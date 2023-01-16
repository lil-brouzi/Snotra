import { reactive, onMounted } from 'vue';
import axiosInstance from '@/Axios/Axios.js';

export function useMainPage() {
    const state = reactive({
        "todayCISes": [],
        "todayScheduleParams": [],
        "homeworksForTodayCISes": [],
        "additionalState": []
    })

    const days = {"1":"понедельник","2": "вторник","3": "среда","4": "четверг","5": "пятница","6": "суббота","7": "воскресенье"};

    const dayOfWeek = (date, day, today) => {
        date = new Date();
        day = date.getDay();
        today = days[day];
        return today
    }

    const months = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь", "октябрь", "ноябрь", "декабрь"];
    const monthAndDay = (date, day, month, today, m) =>{
        date = new Date();
        day = date.getDate();
        m = date.getMonth();
        month = months[m];
        today = `${day} ${month}`;
        return today
    }

    onMounted(async () => {
        await fetchMainPage();
    });

    const FindMSPByNum = (num) => {
        return state.todayScheduleParams.find(e => e.num === num);
    }

    const fetchMainPage = async () => {
        await axiosInstance({
            method: 'get',
            url: 'http://80.78.251.54:7300/api/Teacher/MainPage',
            headers: 'Content-Type: application/json',
            params: {
                teacherId: 'a03ed6b0-3296-4798-ac58-f5c8c34336d7',
            }, 
        })

        .then((response) => {
            console.log(response.data)
            state.todayCISes = response.data.todayCISes;
            state.todayScheduleParams = response.data.todayScheduleParams;
            state.homeworksForTodayCISes = response.data.homeworksForTodayCISes;
            state.additionalState = response.data.additionalState;
        })
    };

    return { state, fetchMainPage, FindMSPByNum, dayOfWeek, monthAndDay }
}