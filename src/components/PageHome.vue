<template>
    <!-- <alert-modal></alert-modal> -->
    <div class="body">
        <div class="sider">
            <home-sider></home-sider>
        </div>
        <div class="content">
            <home-content></home-content>
        </div>
    </div>
</template>

<script>
// import AlertModal from "./AlertModal.vue";
import HomeSider from "./PageHomeSider.vue";
import HomeContent from "./PageHomeContent.vue";
export default {
    name: "PageHome",
    components: {
        // "alert-modal": AlertModal,
        "home-sider": HomeSider,
        "home-content": HomeContent
    },
}
</script>

<style scoped lang="scss">
.body {
    background-color: aquamarine;
}

.sider {
    background-color: antiquewhite;
}

.content {
    background-color: rgb(21, 41, 41);
}

/* phone */
@media screen and (max-width: 480px) {
    .body {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .sider {
        width: 100%;
        min-height: 10%;
        //delete this line
        max-height: 12%;
    }

    .content {
        width: 100%;
        height: 90%;
    }
}

/* ipad */
@media screen and (min-width: 481px) and (max-width: 1024px) {
    .body {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
    }

    .sider {
        width: 40%;
        height: 100%;
    }

    .content {
        width: 60%;
        height: 100%;
    }

}

/* desktop */
@media screen and (min-width: 1025px) {
    .body {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
    }

    .sider {
        width: 30%;
        height: 100%;
    }

    .content {
        width: 70%;
        height: 100%;
    }
}</style>