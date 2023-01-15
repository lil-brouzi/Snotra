<template>
    <div class="classes">
        <div class="classes__prompt">
            <p>Здесь представлен список всех классов в школе</p>
            <p><b>Используйте Ctrl + F для навигации</b></p>
        </div>
        <ClassItem 
        v-for="schoolClass in main.state.schoolClassesCEM"
        :ClassName="schoolClass.className"
        :ClassId="schoolClass.classId"
        :IsMock="schoolClass.isMockClass"
        :HexColor1="'#' + schoolClass.gradientColor1"
        :HexColor2="'#' + schoolClass.gradientColor2"/>
    </div>
</template>

<script setup>
import ClassItem from '@/views/pages/ClassesPages/ClassesListPage/Components/ClassListItem.vue' 
import { useClassesPage } from '@/Services/ClassesPages/ClassesListPage/useClassesListPage.js';

const main = { ...useClassesPage() };
</script>

<style lang="scss" scoped>
span{
    width: calc(100% - 150px);
    max-width: calc(100% - 150px);
}
.classes {
    &__prompt {
        font-weight: 400;
        font-size: 20px;
        p {
            padding: 0;
            margin: 0;
        }
    }
}
</style>