<template>
    <div class="tag" v-if="text != null">
        <div class="tag-wrapper" :style="'background:' + color">
            <img class="tag__icon" :src="icon ? require(`@/Icons/emojis/${icon}`) : `http://80.78.251.54:7300/${icon}`"/>
            <span class="tag__text">{{text}}</span>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    icon: {
        type: String,
        default: undefined
    },
    text: String,
    color: String,
})

</script>

<style lang="scss" scoped>
.tag {
    height: auto;
    width: auto;
    min-height: 30px;

    &-wrapper {
        //background: rgba(244, 231, 231, 0.85);
        padding: 4px 10px;
        box-sizing: border-box;
        border-radius: 16px;
        display: flex;
        flex-direction: row;
        width: auto;
        gap: 10px;
    }

    &__icon {
        width: 23px;
        height: 23px;
    }

    &__text {
        margin: 0;
        width: auto;
        font-weight: 400;
        font-size: 15px;
        word-break: break-all;
    }

}
</style>