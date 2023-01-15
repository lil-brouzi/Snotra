<template>
    <div class="button">
        <div class="button__icon-container">
            <img class="button__icon" :src="require(`@/Icons/ClassesIcons/${ButtonIcon}`)" draggable="false" />
        </div>
        <div class="button__text">{{ ButtonText }}</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    ButtonIcon: String,
    ButtonText: String,
    ButtonUrl: Object,
})

</script>

<style lang="scss" scoped>
.button {
    width: 100px;
    height: 145px;
    cursor: pointer;

    &__icon {
        &-container {
            width: 100px;
            height: 100px;
            background: rgba(173, 173, 173, 0.5);
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    &__text {
        margin-top: 10px;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: #FFFFFF;
    }
}
</style>