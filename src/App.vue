<template>
    <div class="app">
        <main-header/>
        <side-menu
            :sideMenuTopElements="sideMenuTopElements"
            :sideMenuBotElements="sideMenuBotElements"
        />

        <div class="full-content">
            <upper id="upper" />
            <div class="page-content">
                <router-view ></router-view>
            </div>
        </div>
    </div>

</template>

<script>
import MainHeader from '@/views/MainHeader.vue';
import SideMenu from '@/views/SideMenu.vue';
import MainPage from '@/views/pages/MainPage/MainPage.vue';
import ClassesPage from '@/views/pages/ClassesPages/ClassesListPage/ClassesListPage.vue';
import NotificationsPage from '@/views/pages/NotificationsPage/NotificationsPage.vue';
import SchedulePage from '@/views/pages/SchedulePages/SchedulePage.vue';
import Upper from '@/views/Upper.vue';

    export default {
        components: {
            MainHeader, SideMenu, MainPage, ClassesPage, NotificationsPage, SchedulePage, Upper
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
@import '@/bootstrap-reboot.min.css';
@import '@/Fonts/styleFont.css';
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #E8E8E8 !important;
    font-family: 'Fira Sans';
}


#upper{
    height: 241px;
    width: 100%;
    z-index: 995;
}

.full-content {
    margin-left: 90px;
    margin-bottom: 20px;
    width: calc(100% - 90px);
    max-width: calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.page-content {
    width: 1000px;
    max-width: 100%;
    margin: 20px auto 0 auto;
    min-height: 100vh;
}

@media (max-width: 800px) {
    .full-content {
        margin-left: 0px;
        width: 100%;
        max-width: 100%;
        margin-bottom: calc(55px + 20px);
    }

    .page-content {
        padding: 0 15px;
    }
}

</style>