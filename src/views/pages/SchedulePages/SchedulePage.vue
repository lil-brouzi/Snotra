<template>
    <tab-menu
        :tabs="main.tabs.tabs"
        :selected="main.tabs.selected"
        :onTabItemClicked="main.setSelectedTab"
        />
    <div class="subpage">
        <ScheduleModifiendSubpage v-if="main.tabs.selected === 0"/>
        <ScheduleUsualSubpage v-if="main.tabs.selected === 1" />
    </div>
</template>

<script setup>
import TabMenu from '@/Components/TabMenu/TabMenu.vue';
import { useSchedulePage } from '@/Services/SchedulePages/useSchedulePage.js'
import ScheduleModifiendSubpage from '@/views/pages/SchedulePages/Subpages/ScheduleModifiendSubpage.vue'
import ScheduleUsualSubpage from '@/views/pages/SchedulePages/Subpages/ScheduleUsualSubpage.vue'

const main = { ...useSchedulePage() };

</script>

<style lang="scss" scoped>
.schedule {
    &__prompt {
        font-size: 20px;
        p {
            padding: 0;
            margin: 0;
        }
    }

    &-list {
        width: 100%;
        height: 100%;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
.subpage {
    margin-top: 20px;
}
</style>