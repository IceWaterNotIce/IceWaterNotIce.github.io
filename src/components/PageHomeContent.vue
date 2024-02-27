<template>
    <div class="content-content">

        <div class="start-parallelogram parallelogram">
        </div>
        <div class="parallelogram">
        </div>
        <div class="end-parallelogram parallelogram">
        </div>
    </div>
</template>

<script>
export default {
    name: "PageHomeContent",
    data() {
        return {};
    },
    methods: {},
    mounted() { }
};
</script>

<style lang="scss" scoped>

/* phone */
@media screen and (max-width: 480px) {
    .content-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        background-color: rgb(21, 41, 41);
        overflow: hidden;
    }

    .parallelogram {
        background-color: rgb(133, 235, 235);
        width: 100%;
        height: 32%;
        margin: 0;
    }
}

/* ipad */
@media screen and (min-width: 481px) and (max-width: 1024px){
    .content-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        background-color: rgb(21, 41, 41);
        overflow: hidden;
    }

    .parallelogram {
        width: 100%;
        height: 33%;
    }
}


/* pc */
@media screen and (min-width: 1025px) {
    .content-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        background-color: rgb(21, 41, 41);
        overflow: hidden;
    }

    .parallelogram {
        width: 38%;
        height: 100%;
        clip-path: polygon(20% 0, 100% 0, 80% 100%, 0% 100%);
        margin: 0 -10%;
    }

    .start-parallelogram.parallelogram {
        clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
        margin: 0;
    }

    .end-parallelogram.parallelogram {
        clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
        margin: 0;
    }

}
</style>