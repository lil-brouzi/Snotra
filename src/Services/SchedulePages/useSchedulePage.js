import { reactive } from 'vue';

export function useSchedulePage() { 
    const tabs = reactive({
        tabs: [
            {
                id: 0,
                title: "Измененное",
            },
            {
                id: 1,
                title: "Стандартное"
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