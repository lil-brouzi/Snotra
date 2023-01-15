<template>
    <div class="tabs">
        <div class="tabs-wrapper">
            <span 
                v-for="tab in tabs" 
                :class="tab.id === selected ? 'tabs__button__selected' : ''"
                class="tabs__button"
                @click="onTabItemClicked(tab.id)">
                    {{tab.title}}
            </span>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    tabs: Array,
    selected: Number,
    onTabItemClicked: Function,
})

</script>

<style lang="scss" scoped>
.tabs {
    background-color: #FFF;
    width: 100%;
    min-height: 62px;
    border-radius: 10px;
    padding: 20px 25px;
    box-sizing: border-box;

    &-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    &__button {
        font-size: 20px;
        margin-right: 15px;
        cursor: pointer;

        &__selected {
            font-weight: 700;
            color: #C10000;
            border: 4px;
            border-color: #C10000;
            border-style: none none solid none;
        }
    }
}

</style>