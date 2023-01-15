<template>
    <div class="item">
        <div class="item-wrapper" :style="'background: linear-gradient(180deg, ' + HexColor1 + ' 0%, ' + HexColor2 + ' 100%'">
            <div class="item-text-wrapper">
                <p class="item__text">{{text}}</p>
            </div>
            <div class="item-tags-wrapper">
                <data-tag 
                    v-for="tag in tags"
                    :icon="tag.icon"
                    :text="tag.text" 
                    :color="tag.color"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import DataTag from '@/Components/DataTag/DataTag.vue';
import { defineProps } from 'vue'

const props = defineProps({
    text: String,
    tags: Array,
    HexColor1: String,
    HexColor2: String,
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
        border-radius: 10px;
        // background-color: #FFF;
        padding: 20px 15px;
        box-sizing: border-box;
    }

    &-text-wrapper{
        width: auto;
        max-width: 910px;
    }

    &-tags-wrapper {
        margin-top: 1rem;
        width: 100%;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }


    &__text {
        font-size: 20px;
        font-weight: 400;
        width: auto;
        max-width: 100%;
        word-wrap: break-word;
    }
}
</style>