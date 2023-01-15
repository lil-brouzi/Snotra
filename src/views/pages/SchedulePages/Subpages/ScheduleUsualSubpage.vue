<template>
    <div class="schedule-usual">
        <div class="schedule-usual__prompt">
            <p>Здесь представлено стандартное расписание классов, в которых вам предстоит провести урок на <b>{{dateToString(new Date)}}</b></p>
            <p><b>Используйте Ctrl + F для навигации</b></p>
        </div>
        <div class="schedule-usual-list">
            <dropboard 
                v-for="(enDayOfWeek, ruDayOfWeek) in main.DaysOfWeek"
                :text="ruDayOfWeek"
            >
                <ScheduleElement 
                    v-for="lesson in main.FindUCISForDayOfWeek(enDayOfWeek)"
                    :text="lesson.num + '. ' + lesson.className"
                    :HexColor1="'#' + '60A3FC'"
                    :HexColor2="'#' + '60A3FC'"
                    :tags="[
                    {
                        icon: 'algebra.png',
                        text: lesson.subjectFullName,
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'time.png',
                        text: main.FindUSPByNumAndDayOfWeek(lesson.num, enDayOfWeek).begin + ' - ' + main.FindUSPByNumAndDayOfWeek(lesson.num, enDayOfWeek).end + ' (' + main.FindUSPByNumAndDayOfWeek(lesson.num, enDayOfWeek).durationInMins + ' мин.' + ')',
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'school.png',
                        text: lesson.location,
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'student.png',
                        text: lesson.groupId === null ? 'Весь класс' : lesson.groupName,
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'bell.png',
                        text: 'Перемена после: '+ main.FindUSPByNumAndDayOfWeek(lesson.num, enDayOfWeek).breakDurationInMins + ' минут',
                        color: '#F4E7E7D9'
                    },
                ]"
                />
            </dropboard>
        </div>
    </div>
</template>

<script setup>
import ScheduleElement from '@/Components/ScheduleElement/ScheduleElement.vue'
import Dropboard from '@/Components/Dropboard/Dropboard.vue'
import { useScheduleUsualSubpage } from '@/Services/SchedulePages/Subpages/useScheduleUsualSubpage';
const main = { ...useScheduleUsualSubpage() };
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