<template>
    <div class="schedule-modifiend">
        <div class="schedule-modifiend__prompt">
            <p>Здесь представлено стандартное расписание уроков, в данном классе на  <b>{{dateToString(new Date)}}</b></p>
            <p><b>Используйте Ctrl + F для навигации</b></p>
        </div>
        <div class="schedule-modifiend-list">
            <ScheduleElement
                v-for="lesson in main.state.todayMSEForClass"
                :text="lesson.num +'. '+lesson.lessonTitle"
                :active="'Сейчас идет'"
                :icon="lesson.iconURL"
                :comment="lesson.comments"
                :HexColor1="'#'+lesson.gradientColor1"
                :HexColor2="'#'+lesson.gradientColor2"
                :tags="[
                    {
                        icon: 'school.png',
                        text: lesson.location,
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'student.png',
                        text: lesson.group === null ? 'Весь класс' : lesson.group,
                        color: '#F4E7E7D9'
                    }
                ]"
            />
        </div>
    </div>
</template>

<script setup>
import { useMSEForClassSubpage } from '@/Services/ClassesPages/ClassPage/Subpages/useMSEForClassSubpage';
import ScheduleElement from '@/Components/ScheduleElement/ScheduleElement.vue'

const main = { ...useMSEForClassSubpage() };
const dateToString = (date) => {
    return date.getUTCDate() + '.' + date.getUTCMonth() + '.' + date.getUTCFullYear();
}
</script>

<style lang="scss" scoped>
.schedule-modifiend {
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
</style>