<template>
    <div class="sider-content">
        <router-link to="/" class="my-logo-link" >
            <img src="../assets/images/my-logo.png" alt="logo" class="my-logo" />
        </router-link>
        <h1>Ice Water Not Ice</h1>
        <a-menu mode="vertical">
            <a-menu-item key="1">
                <router-link to="/portfolio">Portfolio</router-link>
            </a-menu-item>
            <a-menu-item key="2">
                <router-link to="/NoteList">Notes</router-link>
            </a-menu-item>
            <a-menu-item key="3">
                <router-link to="/toolbox">Toolbox</router-link>
            </a-menu-item>
        </a-menu>
    </div>
</template>    

<script>
export default {
    name: "PageHomeSider",
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 480px) {
    .sider-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .my-logo{
        width: auto;
        height: 8vh;
    }

    
}

@media screen and (min-width: 481px) {

    .sider-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .my-logo{
        width: 50%;
        height: auto;
    }
}
</style>