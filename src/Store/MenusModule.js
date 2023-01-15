export const MenusModule = {
    state: () => ({
        sideMenuTopElements: [
            {
                id: 1, 
                class: 'icon-home', 
                link: '/home', 
                title: 'Главная страница'
            },
            {
                id: 2, 
                class: 'icon-dashboard', 
                link: '/schedule', 
                title: 'Расписание'
            },
            {
                id: 3, 
                class: 'icon-supervised-user', 
                link: '/classes', 
                title: 'Классы'
            },
            {
                id: 4, 
                class: 'icon-notifications', 
                link: '/notifications', 
                title: 'Уведомления'
            },
        ],
        sideMenuBotElements: [
            {
                id: 5,
                class: 'icon-user', 
                title: 'Личный кабинет', 
                link: '/user'  
            },
        ],
    }),
    getters: {
        
    },
    mutations: {
    },
    actions: {
        
    },
    namespaced: true,
}