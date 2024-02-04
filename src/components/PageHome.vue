<template>
    <a-layout>
        <a-layout-sider>
            <!-- 頭像-->
            <!-- 頭像被按下時重定向到根目錄 -->
            <router-link to="/">
                <a-avatar :src="require('@/assets/images/my-logo.png')"
                    style="margin: 1rem auto; display: block;"></a-avatar>
            </router-link>
            <!-- 名字 -->
            <h1 style="color: #fff; text-align: center; margin-bottom: 2rem;">IceWaterNotIce</h1>
            <!-- 選單 -->
            <a-menu theme="dark" mode="inline" default-selected-keys="1">
                <a-menu-item key="1">
                    <span>CV</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <span>nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <span>nav 3</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header>
                <h1 style="color: #fff; text-align: center;">IceWaterNotIce</h1>
                <a-input-search v-model:value="value" placeholder="input search text" style="width: 200px"
                    @search="onSearch" />
            </a-layout-header>
            <a-layout-content>
                <page-home-content></page-home-content>
            </a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
    </a-layout>



    <!-- 懸浮組件 -->
    <outer-links></outer-links>
</template>

<script>
import PageHomeContent from './PageHomeContent.vue';
import outerLinks from './outerLinks.vue';
export default {
    name: 'PageHome',
    components: {
        "page-home-content": PageHomeContent,
        "outer-links": outerLinks
    },
    props: {
    },
    methods: {
    },
    mounted: function () {
        this.$nextTick(function () {
        })
    }
}
</script>

<style scoped>
.ant-layout {
    min-height: 100vh;
}
</style>