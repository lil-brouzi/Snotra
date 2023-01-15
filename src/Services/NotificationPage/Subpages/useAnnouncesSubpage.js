import { reactive, onMounted } from 'vue';
import axiosInstance from '@/Axios/Axios.js';

export function useAnnouncesSubpage() {
    const state = reactive({
        "announcements": []
    })

    onMounted(async () => {
        await fetchAnnounces();
    });

    const fetchAnnounces = async () => {
        await axiosInstance.post("http://80.78.251.54:7300/api/Teacher/AnnouncementsPage", {
            params: {
                notificationVersion: 'demo'
            }
        })
        .then((response) => {
            console.log(response.data)
            state.announcements = response.data.announcements;
        })
    };

    return { state, fetchAnnounces }
}