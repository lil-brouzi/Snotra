<template>
    <tab-menu
        :tabs="main.tabs.tabs"
        :selected="main.tabs.selected"
        :onTabItemClicked="main.setSelectedTab"/>
    <div class="subpage">
        <announces-subpage v-if="main.tabs.selected === 0"/>
        <notifications-for-students-subpage v-if="main.tabs.selected === 1"/>
    </div>
</template>

<script setup>
import TabMenu from '@/Components/TabMenu/TabMenu.vue';
import AnnouncesSubpage from './Subpages/AnnouncesSubpage/AnnouncesSubpage.vue';
import NotificationsForStudentsSubpage from './Subpages/NotificationsForStudentsSubpage/NotificationsForStudentsSubpage.vue';

import { useNotificationPage } from '@/Services/NotificationPage/useNotificationPage.js'

const main = { ...useNotificationPage() };

</script>

<style lang="scss" scoped>
.subpage {
    margin-top: 20px;
}
</style>