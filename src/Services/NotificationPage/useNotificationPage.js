import { reactive } from 'vue';

export function useNotificationPage() {
    const tabs = reactive({
        tabs: [
            {
                id: 0,
                title: "Школьные анонсы",
            },
            {
                id: 1,
                title: "Уведомления для учащихся"
            }
        ],
        selected: 0,
    })

    const setSelectedTab = (selectedId) => {
        tabs.selected = selectedId;
    }

    const state = reactive({

    })

    return {tabs, setSelectedTab, state}


}