<template>
    <div class="content-content">
        <div class="start-parallelogram parallelogram">
            <img src="https://via.placeholder.com/500x700" alt="placeholder" />
            <div>
                <h1>Home</h1>
                <p>
                    fff
                </p>
            </div>
        </div>
        <div class="parallelogram">
            <img src="https://via.placeholder.com/500x700" alt="placeholder" />
            <div>
                <h1>Home</h1>
                <p>
                    fff
                </p>
            </div>
        </div>
        <div class="end-parallelogram parallelogram">
            <img src="https://via.placeholder.com/500x700" alt="placeholder" />
            <div>
                <h1>Home</h1>
                <p>
                    fff
                </p>
            </div>
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
.start-parallelogram.parallelogram {
    background-color: rgb(133, 235, 235);
}

.parallelogram {
    background-color: rgb(49, 141, 141);
}

.end-parallelogram.parallelogram {
    background-color: rgb(10, 89, 89);
}

.parallelogram {
    display: flex;
    flex-direction: column;
}

.parallelogram img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
}


/* phone */
@media screen and (max-width: 480px) {
    .content-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        overflow: hidden;
    }

    .parallelogram {
        width: 100%;
        height: 32%;
        margin: 0;
    }
}

/* ipad */
@media screen and (min-width: 481px) and (max-width: 1024px) {
    .content-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
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