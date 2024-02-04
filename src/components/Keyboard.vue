<template>
    <div class="key-board-line" v-for="linekeys in keys" :key="linekeys">
        <div class="key-board-key" v-for="key in linekeys" :key="key">
            {{ key.key }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Key-board',
    props: {
        keys: Array
    },
    setup(props) {
        console.log(props.keys);
    }
}
</script>

<style lang="scss" scoped>
.key-board-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}

.key-board-key {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    border: 1px solid black;
}

.key-board-special {
    background-color: #ff0000;
}
</style>