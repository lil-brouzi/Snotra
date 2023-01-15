<template>
    <div class="item">
        <div class="item-wrapper" :style="'background: linear-gradient(180deg, ' + HexColor1 + ' 0%, ' + HexColor2 + ' 100%'">
            <div class="item-text-and-tag-wrapper">
                <div class="text-and-circle">
                    <div class="item-circle" v-if="icon != null">
                        <div class="item-circle__border">
                            <img class="item-circle__icon" :src="icon === undefined ? require(`@/Icons/emojis/${icon}`) : `http://80.78.251.54:7300/${icon}`"/>
                        </div>
                    </div>
                    <p class="item__text">{{text}}</p>
                </div>
                <div class="item-tag-activities" v-if="active != null">
                    <span class="item-tag-activities__text">{{active}}</span>
                    <div class="item__circle"></div>
                </div>
            </div>
            <div class="item-comments-wrapper" v-if="comment != null">
                <img class="item-circle__icon" :src="require(`@/Icons/emojis/hand.png`)"/>
                <span class="item__comment">{{comment}}</span>
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
    icon: {
            type: String,
            default: undefined
        },
    tags: Array,
    comment: String,
    active: String,
    HexColor1: String,
    HexColor2: String,
})

</script>

<style lang="scss" scoped>
.item {
    width: 100%;
    height: auto;
    min-height: 100px;
    .text-and-circle {
        display: flex;
        justify-content: start;
    }
    &-circle {
        width: 55px;
        height: 55px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
        &__icon {
            height: 30px;
            width: 30px;
        }
        &__border {
            height: 40px;
            width: 40px;
            background: #ffffff;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }


    &-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 20px 27px;
        box-sizing: border-box;
    }

    &-text-and-tag-wrapper{
        width: auto;
        max-width: 950px;
        display: flex;
        justify-content: space-between;
        
    }

    &-tags-wrapper {
        width: 100%;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        width: 70%;
    }


    &__text {
        font-weight: 700;
        font-size: 45px;
        line-height: 54px;
        width: auto;
        word-wrap: break-word;
        color: #ffffff;
    }

    &-tag-activities {
        height: auto;
        min-width: 130px;
        max-height: 30px;
        background: rgba(255, 255, 255, 0.85);
        padding-top: 4px;
        padding-left: 10px;
        padding-bottom: 4px;
        box-sizing: border-box;
        border-radius: 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: auto;
        float:right;

        &__text {
            margin: 0;
            width: auto;
            font-weight: 400;
            font-size: 15px;
            word-break: break-all;
        }
    }
    &__circle {
        width: 30px;
        height: 30px;
        background: #FF4E4E;
        border: 3px solid #FFFFFF;
        border-radius: 50%;

    }

    &-comments-wrapper {
        margin-bottom: 23px;
        margin-top: 10px;
        margin-left: 10px;
        display: flex;
    }
    &__icon {
        width: 23px;
        height: 23px;
    }

    &__comment {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }
}
</style>