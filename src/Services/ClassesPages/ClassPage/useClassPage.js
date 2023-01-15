import { reactive } from 'vue';
export function useClassPage() { 
    const tabs = reactive({
        tabs: [
            {
                id: 0,
                title: "Домашние задания",
            },
            {
                id: 1,
                title: "Все учащиеся"
            },
            {
                id: 2,
                title: "Сегодня отсутствуют"
            },
            {
                id: 3,
                title: "Рассадка по партам"
            },
            {
                id: 4,
                title: "Расписание - стандартное"
            },
            {
                id: 5,
                title: "Расписание - измененное"
            },

        ],
        selected: 0,
    })

    const goToClassPage = (url ,selectedId) => {
        url;
        setSelectedTab(selectedId);
    };

    const setSelectedTab = (selectedId) => {
        tabs.selected = selectedId;
    }

    const state = reactive({
        
    })

    return {tabs, setSelectedTab, state, goToClassPage}
}

