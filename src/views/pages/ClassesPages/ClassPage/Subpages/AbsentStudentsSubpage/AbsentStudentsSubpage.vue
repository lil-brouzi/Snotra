<template>
    <div class='absent-Students'>
        <div class="absent-students__prompt">
            <p>Здесь представлен список отсутствующих в данном классе</p>
            <p><b>Используйте Ctrl + F для навигации</b></p>
        </div>
        <div class="absent-students-list">
            <Item-With-Text-And-Tags
                v-for="studentStatus in main.state.studentsStatuses"
                :text="studentStatus.studentFullName"
                :HexColor1="'#FFFFFF'"
                :HexColor2="'#FFFFFF'"
                :tags="[
                    {
                        icon: 'student.png',
                        text: studentStatus.statusName,
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'calendar.png',
                        text:'Статус установлен: ' + dateToString(new Date(studentStatus.dateOfAppend)),
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'messageCallout.png',
                        text: studentStatus.comment,
                        color: '#F4E7E7D9'
                    }
                ]"
            />
        </div>
    </div>
</template>

<script setup>
import ItemWithTextAndTags from '@/Components/ListItemWithTextAndTags/ItemWithTextAndTags.vue';
import { useAbsentStudentsSubpage } from '@/Services/ClassesPages/ClassPage/Subpages/useAbsentStudentsSubpage';

const main = { ...useAbsentStudentsSubpage() };

const dateToString = (date) => {
    return date.getUTCDate() + '.' + date.getUTCMonth() + '.' + date.getUTCFullYear();
}
</script>

<style lang="scss" scoped>
.absent-students {
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