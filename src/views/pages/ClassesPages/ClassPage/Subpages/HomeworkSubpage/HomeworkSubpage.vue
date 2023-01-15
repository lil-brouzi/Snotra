<template>
    <div class="homework">
        <div class="homework__prompt">
            <p>Здесь представлен список домашних заданий для данного класса по дням. Нажмите на любой пункт, чтобы его развенруть</p>
            <p><b>Используйте Ctrl + F для навигации</b></p>
        </div>
        <div class="homework-list">
            <dropboard 
                v-for="(homeworks, date) in main.state.homeworks"
                :text="dateToString(new Date) === dateToString(new Date(date)) ? 'На сегодня' : 'На ' + dateToString(new Date(date))"
            >
            <Item-With-Text-And-Tags
                v-for="homework in homeworks"
                :HexColor1="'#'+homework.gradientColor1"
                :HexColor2="'#'+homework.gradientColor2"
                :text="homework.taskText"
                :tags= "[
                    {
                        icon: 'algebra.png',
                        text: homework.subjectName,
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'student.png',
                        text: homework.groupId === null ? 'Весь класс' : homework.groupName,
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'calendar.png',
                        text:'Было задано: ' + dateToString(new Date(homework.appendDate)),
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'student.png',
                        text:'Задание добавил: ' + homework.authorName + ' - ' + homework.authorsDutyComment,
                        color: '#F4E7E7D9'
                    },
                    
                ]"
                
            />
            </dropboard>
        
        </div>
    </div>
</template>

<script setup>
import Dropboard from '@/Components/Dropboard/Dropboard.vue'
import { useHomeworkSubpage } from '@/Services/ClassesPages/ClassPage/Subpages/useHomeworkSubpage';
import ItemWithTextAndTags from '@/Components/ListItemWithTextAndTags/ItemWithTextAndTags.vue';
const main = { ...useHomeworkSubpage() };

const dateToString = (date) => {
    return date.getUTCDate() + '.' + date.getUTCMonth() + '.' + date.getUTCFullYear();
}
</script>

<style lang="scss" scoped>
.homework {
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