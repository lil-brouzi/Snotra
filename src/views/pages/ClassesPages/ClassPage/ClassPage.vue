<template>
    <tab-menu
        :tabs="main.tabs.tabs"
        :selected="main.tabs.selected"
        :onTabItemClicked="main.setSelectedTab"/>

    <div class="subpage">
        <HomeworkSubpage v-if="main.tabs.selected === 0"/>
        <AllStudentsSubpageVue v-if="main.tabs.selected === 1"/>
        <AbsentStudentsSubpage v-if="main.tabs.selected === 2"/>
        <MSEForClassPage v-if="main.tabs.selected === 4"/>
        <USEForClassPage v-if="main.tabs.selected === 5"/>
    </div>

</template>

<script setup>
import TabMenu from '@/Components/TabMenu/TabMenu.vue';
import { useClassPage } from '@/Services/ClassesPages/ClassPage/useClassPage.js';

import AllStudentsSubpageVue from './Subpages/AllStudentsSubpage/AllStudentsSubpage.vue';
import AbsentStudentsSubpage from './Subpages/AbsentStudentsSubpage/AbsentStudentsSubpage.vue';
import HomeworkSubpage from './Subpages/HomeworkSubpage/HomeworkSubpage.vue';
import MSEForClassPage from './Subpages/MSEForClassSubpage/MSEForClassSubpage.vue';
import USEForClassPage from './Subpages/USEForClassSubpage/USEForClassSubpage.vue';

const main = { ...useClassPage() };
</script>

<style lang="scss" scoped>
.subpage {
    margin-top: 20px;
}
</style>