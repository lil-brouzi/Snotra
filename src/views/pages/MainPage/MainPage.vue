<template>
    <div class="main">
        <div class="main__prompt">
            <p>Сегодня <b>{{main.dayOfWeek()}}, {{ main.monthAndDay() }}</b> </p>
            <p>И вот ближайший урок на данный момент и домашнее задание, которые вы задали к нему</p>
        </div>
        <div class="main-list">
            <div class="main-list__text">
                <div class="main__current">
                    Текущий урок
                </div>
                <div class="main__next">
                    Затем
                </div>
            </div>
            <div class="main-list__schedule">
                <ScheduleElement
                v-for="lesson in main.state.todayCISes"
                :num="lesson.num"
                :text="lesson.subjectFullName"
                :HexColor1="'#' + 'FF77D9'"
                :HexColor2="'#' + 'FF7702'"
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
                        icon: 'bell.png',
                        text: 'Перемена после: '+ main.FindMSPByNum(lesson.num).breakDurationInMins + ' минут',
                        color: '#F4E7E7D9'
                    },
                ]"
                />
            </div>
            <div class="main-list__text">
                <div class="main__current">
                    Список дом. заданий к этому уроку
                </div>
                <div class="main__next">
                    Список дом. заданий к этому уроку
                </div>
            </div>
            <div class="main-list__homework">
                <MainHomework
                    v-for="index in main.state.homeworksForTodayCISes"
                    :title="index.taskText"
                    :text="'Добавил: '+ index.authorName+', '+ index.authorsDutyComment"
                    :HexColor1="'#7F3DCC'"
                    :HexColor2="'#2ACC90'"
                    
                />
            </div>
        </div>
    </div>    
</template>

<script setup>
import ScheduleElement from '@/Components/ScheduleElement/ScheduleElement.vue'
import MainHomework from '@/Components/MainHomework/MainHomework.vue';
import { useMainPage } from '@/Services/MainPage/useMainPage';
const main = { ...useMainPage() };
</script>

<style lang="scss" scoped>
.main {
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
        &__schedule{
            width: 100%;
            height: 100%;
            display: flex;
            gap: 20px;
        }
        &__text{
            display: flex;
            margin-top: 30px;
            margin-bottom: 10px;
    
        }
        &__homework{
            width: 100%;
            height: 100%;
            display: flex;
            gap: 20px;
        }
    }
    &__current{
        color: #545454;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        width: 488px;
        margin-right: 20px;

    }
    &__next{
        color: #545454;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    }
}
</style>