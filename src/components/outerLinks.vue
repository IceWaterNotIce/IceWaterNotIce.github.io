<!-- 
    組件用途：外部連結至其他網站
-->
<template>
    <a-float-button-group trigger="hover" type="primary">
        <!-- Cover icon -->
        <template #icon>
            <SearchOutlined />
        </template>
        <a-float-button :icon="GithubOutlined" />
        <a-float-button :icon="YoutubeOutlined" />
        <a-float-button :icon="InstagramOutlined" />
        <a-float-button :icon="QqOutlined" />
        <a-float-button :icon="WechatOutlined" />

    </a-float-button-group>
</template>

<script>
export default {
    name: 'OuterLinks',
    components: {
    },
    data() {
        return {

        }
    },
    props: {
    },
    setup() {
        return {
        }
    },
}
</script>

<style scoped>
.ant-float-btn-group {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 1rem;
}
</style>