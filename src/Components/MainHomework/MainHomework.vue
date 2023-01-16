<template>
    <div class="item">
        <div class="item-wrapper" :style="'background: linear-gradient(180deg, ' + HexColor1 + ' 0%, ' + HexColor2 + ' 100%'">
            <div class="item-text-wrapper">
                <p class="item__title" v-if="title !=undefined">{{title}}</p>
                <p class="item__text">{{text}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    text: String,
    HexColor1: String,
    HexColor2: String,
    title: {
            type: String,
            default: undefined
        },
})

</script>

<style lang="scss" scoped>
p {
    margin-bottom: 0;
}
.item {
    width: 100%;
    height: auto;
    min-height: 100px;
    z-index: 800;

    &-wrapper {
        width: 100%;
        height: 100%;
        padding: 20px 40px;
        box-sizing: border-box;
        border-radius: 15px;
    }

    &-text-wrapper{
        width: auto;
        max-width: 910px;
    }
    &__title{
        font-weight: 700;
        font-size: 35px;
        line-height: 42px;
        display: flex;
        align-items: center;

        color: #FFFFFF;
    }

    &__text {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;

        color: #FFFFFF;


    }
}
</style>