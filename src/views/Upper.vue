<template>
    <div class="upper">
        <img class="upper__background-image" src='@/Images/headerImg.png'/>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.upper {
    width: 100%;
    height: 100%;

    &__background-image {
        display: block;
        object-fit: cover;
        border-radius: 0px;
        width: 100%;
        height: 100%;
        opacity: 1;
        object-position: center 57.5%;
        z-index: -1;
    }
}

</style>