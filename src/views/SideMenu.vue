<template>
    <div class="VerticalSideMenuParent">
        <div class="sideMenuTop">
            <i 
                class='sideMenuTopElement' 
                v-for="sideMenuTopElement in $store.state.menus.sideMenuTopElements" 
                :class="sideMenuTopElement.class, {'active': $route.path.startsWith(sideMenuTopElement.link)}"
                @click="$router.push(sideMenuTopElement.link)"
                :title="sideMenuTopElement.title"
            >
            </i>
        </div>
        <div class="sideMenuBot">
            <i 
                class='sideMenuBotElement' 
                v-for="sideMenuBotElement in $store.state.menus.sideMenuBotElements" 
                :class="sideMenuBotElement.class, {'active': $route.path.startsWith(sideMenuBotElement.link)}"
                @click="$router.push(sideMenuBotElement.link)"
                :title="sideMenuBotElement.title"
            >
                
            </i>
        </div>
    </div>
    <div class="HorizontalSideMenuParent">
            <i
                class='sideMenuTopElement' 
                v-for="sideMenuTopElement in $store.state.menus.sideMenuTopElements" 
                :class="sideMenuTopElement.class, {'active': $route.path.startsWith(sideMenuTopElement.link)}"
                @click="$router.push(sideMenuTopElement.link)"
                :title="sideMenuTopElement.title"
            >
            </i>
            <i 
                class='sideMenuBotElement' 
                v-for="sideMenuBotElement in $store.state.menus.sideMenuBotElements" 
                :class="sideMenuBotElement.class, {'active': $route.path.startsWith(sideMenuBotElement.link)}"
                @click="$router.push(sideMenuBotElement.link)"
                :title="sideMenuBotElement.title"
            >
            </i>
    </div>
    
</template>

<script>

    export default {           
        }
</script>

<style lang="scss" scoped>
.VerticalSideMenuParent {
    position: fixed;
    width: 90px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    left: 0;
    top: 0;
    padding-top: 74px;
    z-index: 999;
}
.sideMenuTop {
    width: 90px;
}
.sideMenuBot {
    width: 90px;  
}
i {
    width: 90px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        color: #545454;
    }
}
.active {
    color:#C10000;
    &:hover {
        color:#C10000;
    }
}
.HorizontalSideMenuParent {
    z-index: 999;
    display: none;
}
@media (max-width: 800px) {
    .HorizontalSideMenuParent {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 55px;
      width: 100%;
      bottom: 0;
      position: fixed;
      background-color: #FFF;
      border: 2px;
      border-color: #e8e8e8;
      border-style: solid none none none;
    }
  
    .sideMenuParent {
      display: none;
    }
  
    i {
      width: 30px;
      height: 30px;
      margin: auto;
    }
  }
</style>