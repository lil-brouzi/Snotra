<template>
    <div v-if="!IsMock" class="item" :style="'background: linear-gradient(180deg, ' + HexColor1 + ' 0%, ' + HexColor2 + ' 100%'">
        <span class="item__class">{{ClassName}}</span>
        <div class="item-wrapper">
            <ClassListItemButton :ButtonText="'Домашние задания'" :ButtonIcon="'HomeWork.svg'" @click="goToClassPage($router.push(`/classes/${ClassId}`), 0)" />
            <ClassListItemButton :ButtonText="'Все учащиеся'" :ButtonIcon="'People.svg'" @click="goToClassPage($router.push(`/classes/${ClassId}`), 1)" />
            <ClassListItemButton :ButtonText="'Сегодня отсутствуют'" :ButtonIcon="'PeopleOutline.svg'" @click="goToClassPage($router.push(`/classes/${ClassId}`), 2)"/>
            <ClassListItemButton :ButtonText="'Рассадка по партам'"  :ButtonIcon="'Studying.svg'" @click="goToClassPage($router.push(`/classes/${ClassId}`), 4)"/>
            <ClassListItemButton :ButtonText="'Расписание'" :ButtonIcon="'Dashboard.svg'" @click="goToClassPage($router.push(`/classes/${ClassId}`), 5)"/>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import ClassListItemButton from './ClassListItemButton.vue';
import { useClassPage } from '@/Services/ClassesPages/ClassPage/useClassPage.js';
const main = { ...useClassPage() };
const props = defineProps({
    ClassName: String, 
    ClassId: Number,
    IsMock: Boolean,
    HexColor1: String,
    HexColor2: String,
})
</script>

<style lang="scss" scoped>
.item {
    max-width: 997px;
    min-height: 253px;
    
    border-radius: 15px;
    margin-top: 30px;
    &__class {
        font-weight: 700;
        font-size: 35px;
        line-height: 42px;
        display: flex;
        display: block;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        padding-top: 15px;
    }
    &-wrapper {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 25px;
        max-width: 732px;
        margin: 25px auto 0px auto;
        gap: 58px;
    }
    &-elements {
        max-width: 100px;
        max-height: 145px;
    }
    &__icon {
        width: 100px;
        height: 100px;
        background: rgba(173, 173, 173, 0.5);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 70px;
            width: 70px;
        }
    }
    &__text {
        margin-top: 10px;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: #FFFFFF;
    }
}

@media (max-width: 780px) { 
    .item {
        &-wrapper {
            gap: 20px;
            padding: 0 20px 25px 20px;
            justify-content: space-evenly;            
        }
    }

}

</style>