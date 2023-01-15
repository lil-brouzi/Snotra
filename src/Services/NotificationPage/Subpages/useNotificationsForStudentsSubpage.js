import { reactive, onMounted } from 'vue';
import axiosInstance from '@/Axios/Axios.js';

export function useNotificationsForStudentsSubpage() {
    const state = reactive({
        "notifications": []
    })

    onMounted(async () => {
        await fetchNotification();
    });

    const fetchNotification = async () => {
        await axiosInstance.post("http://80.78.251.54:7300/api/Teacher/NotificationPage?teacherId=a03ed6b0-3296-4798-ac58-f5c8c34336d7&notificationVersion=demo", {
            params: {
                teacherId: 'a03ed6b0-3296-4798-ac58-f5c8c34336d7',
                notificationVersion: 'demo'
            }
        })
        .then((response) => {
            console.log(response.data)
            state.notifications = response.data.notifications;
        })
    };

    return { state, fetchNotification }
}