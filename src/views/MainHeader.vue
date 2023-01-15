<template>
    <div>
        <header>
            <div class="SnotraLogoParent">
                <div @click="$router.push('/home')" class="SnotraLogo" title="Главная страница">
                    <img class="SnotraLogoImg" src="@/Icons/SnotraLogo.svg" alt="Logo">
                    <span>Snotra</span>                
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    top: 0;

}
header {
    width: 100%;
    height: 74px;
    
    background: #FFFFFF;
    display: flex;
    align-items: center;
    
    .SnotraLogoParent{
        margin-left: 330px;
        width: 100%;
        display: flex;
    }
    .SnotraLogoImg {
        height: 50px;
        width: 50px;
        margin-right: 15px;
    }
    .SnotraLogo {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 35px;
        line-height: 42px;
        cursor: pointer;

        /* identical to box height */
        display: flex;
        align-items: center;

        color: #000000;
    }
}
.subHeader {
    height: 74px;
    width: 100%;
}
@media (max-width: 800px) {
    header {
        .SnotraLogoParent{
            margin-left: 0;
            justify-content: center;
        }
    }
}
</style>