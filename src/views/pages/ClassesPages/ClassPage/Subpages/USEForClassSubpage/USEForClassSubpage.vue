<template>
    <div class="schedule-usual">
        <div class="schedule-usual__prompt">
            <p>Здесь представлено измененное расписание уроков, в данном классе на  <b>{{dateToString(new Date)}}</b></p>
            <p><b>Используйте Ctrl + F для навигации</b></p>
        </div>
        <div class="schedule-usual-list">
            <dropboard
                v-for="(enDayOfWeek, ruDayOfWeek) in main.DaysOfWeek"
                :text="ruDayOfWeek"
            >
                <ScheduleElement
                    v-for="lesson in main.FindUCISForDayOfWeek(enDayOfWeek)"
                    :text="(lesson.num + '. ' + lesson.lessonTitle)"
                    :icon="lesson.iconURL"
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
            </dropboard>
        </div>
    </div>
</template>

<script setup>
import Dropboard from '@/Components/Dropboard/Dropboard.vue'
import { useUSEForClassSubpage } from '@/Services/ClassesPages/ClassPage/Subpages/useUSEForClassSubpage';
import ScheduleElement from '@/Components/ScheduleElement/ScheduleElement.vue'

const main = { ...useUSEForClassSubpage() };

const dateToString = (date) => {
    return date.getUTCDate() + '.' + date.getUTCMonth() + '.' + date.getUTCFullYear();
}
</script>

<style lang="scss" scoped>
.schedule-usual {
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