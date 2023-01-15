<template>
    <div class="all-students">
        <div class="all-students__prompt">
            <p>Здесь представлен список всех учащихся данного класса</p>
            <p><b>Используйте Ctrl + F для навигации</b></p>
        </div>

        <div class="all-students-list">
            <item-with-text-and-tags 
                v-for="student in main.state.students"
                :text="student.getFullName"
                :HexColor1="'#FFFFFF'"
                :HexColor2="'#FFFFFF'"
                :tags="[
                    {
                        icon: 'student.png',
                        text: student.dutyComment,
                        color: '#F4E7E7D9'
                    }, 
                    {
                        icon: 'star.png',
                        text: student.isClassWarden ? 'Староста класса' : null,
                        color: '#F4E7E7D9'
                    }, 
                ]"
            />
        </div>
    </div>
</template>

<script setup>
import ItemWithTextAndTags from '@/Components/ListItemWithTextAndTags/ItemWithTextAndTags.vue';
import { useAllStudentsSubpage } from '@/Services/ClassesPages/ClassPage/Subpages/useAllStudentsSubpage';

const main = { ...useAllStudentsSubpage() };
console.log(main)

</script>

<style lang="scss" scoped>
.all-students {
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