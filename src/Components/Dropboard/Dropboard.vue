<template>
    <div class="dropboard">
        <div class="dropboard-wrapper" @click="toggle">
            <img :src="visible ? require('@/Icons/DropboardIcons/expand.svg') : require('@/Icons/DropboardIcons/expand_less.svg')">
            <span class="dropboard__text">{{text}}</span>
        </div>
        <div class="dropboard-list" v-if="visible">
            <slot />
        </div>
    </div>
</template>

<script setup>

import { defineProps, ref} from 'vue'
const visible = ref(false);
const toggle = () => {
    visible.value = !visible.value
}

const props = defineProps({
    text: Object,
    itemWtat: Object,
    itemWE: Object

})
</script>

<style lang="scss" scoped>
.dropboard {
    height: auto;
    width: auto;
    background-color: white;
    border-radius: 10px;
    &-wrapper {
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: auto;
        height: 70px;
        gap: 10px;
        padding: 0px 15px;
        img {
            height: 30px;
            width: 30px;
            transition: 3s;
        }
    }
    &__text {
        font-weight: 700;
        font-size: 25px;
        line-height: 30px;
        color: #000000;
    }
    &-list {
        transform: translate(0, -10px);
        margin-left: 70px;
        margin-right: 30px;
        padding-bottom: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>