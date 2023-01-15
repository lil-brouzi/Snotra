<template>
    <div class="main-usual">
        <div class="main-usual__prompt">
            <p>Сегодня<b></b></p>
            <p>И вот ближайший урок на данный момент и домашнее задание, которые вы задали к нему</p>
        </div>
    </div>    
</template>

<script setup>
 
</script>

<style lang="scss" scoped>
.main-usual {
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