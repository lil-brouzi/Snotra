<template>
    <div class="schedule-modifiend">
        <div class="schedule-modifiend__prompt">
            <p>Здесь представлено измененное расписание классов, в которых вам предстоит провести урок на  <b>{{dateToString(new Date)}}</b></p>
            <p><b>Используйте Ctrl + F для навигации</b></p>
        </div>
        <div class="schedule-modifiend-list">
            <ScheduleElement
                v-for="lesson in main.state.mciSesForToday"
                :text="lesson.num + '. ' + lesson.className"
                :HexColor1="'#' + '60A3FC'"
                :HexColor2="'#' + '60A3FC'"
                :comment="lesson.comment"
                :active="'Сейчас идет'"
                :tags="[
                    {
                        icon: 'algebra.png',
                        text: lesson.subjectFullName,
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'time.png',
                        text: main.FindMSPByNum(lesson.num).begin + ' - ' + main.FindMSPByNum(lesson.num).end + ' (' + main.FindMSPByNum(lesson.num).durationInMins + ' мин.' + ')',
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
                        text: 'Перемена после: '+ main.FindMSPByNum(lesson.num).breakDurationInMins + ' минут',
                        color: '#F4E7E7D9'
                    },
                ]"
            />
        </div>
    </div>
</template>

<script setup>
import ScheduleElement from '@/Components/ScheduleElement/ScheduleElement.vue'
import { useScheduleModifiendSubpage } from '@/Services/SchedulePages/Subpages/useScheduleModifiendSubpage';
const main = { ...useScheduleModifiendSubpage() };
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