<template>
    <div class="announces">
        <div class="announces__prompt">
            <p>Здесь представлен список уведомлений, которые вы отправили учащися школы/группам учащихся/классам школы.</p>
            <p><b>Используйте Ctrl + F для навигации</b></p>
        </div>

        <div class="announces-list">
            <item-with-text-and-tags 
                v-for="notification in main.state.notifications"
                :text="notification.notificationText"
                :HexColor1="'#FFFFFF'"
                :HexColor2="'#FFFFFF'"
                :tags="[
                    {
                        icon: 'student.png',
                        text: notification.notificationReciever,
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'teacher.png',
                        text: notification.notificationAuthorSurenameAndInitials,
                        color: '#F4E7E7D9'
                    },
                    {
                        icon: 'calendar.png',
                        text: dateToString(new Date(notification.date)),
                        color: '#F4E7E7D9'
                    }, 
                ]"
            />

        </div>
    </div>
</template>

<script setup>
import ItemWithTextAndTags from '@/Components/ListItemWithTextAndTags/ItemWithTextAndTags.vue';
import { useNotificationsForStudentsSubpage } from '@/Services/NotificationPage/Subpages/useNotificationsForStudentsSubpage';

const dateToString = (date) => {
    return date.getUTCDate() + '.' + date.getUTCMonth() + '.' + date.getUTCFullYear();
}

const main = { ...useNotificationsForStudentsSubpage() };

</script>


<style lang="scss" scoped>
.announces {
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