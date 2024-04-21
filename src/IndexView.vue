<script setup lang="ts">
import { Layout } from 'ant-design-vue'
import { Menu } from 'ant-design-vue'

import CG_ModelingImagePreview from '@/components/CG_ModelingImagePreview.vue'
</script>

<template>
  <Layout>
    <h1>ICEWATERNOTICE</h1>
    <div class="nav">
      <p>flight with ss</p>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </div>
    <CG_ModelingImagePreview />
  </Layout>
</template>

<style lang="scss">
body {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/night.png');
  &.night {
    background-image: url('/images/night.png');
  }
}
</style>
<style scoped lang="scss">
.ant-layout {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  width: calc(412px + 40vw);
  max-width: 100vw;
  @media (max-width: 412px) {
    width: 100vw;
  }
  min-height: 100vh;
  padding: 0 1rem;
  backdrop-filter: blur(50px);
  background: rgba(255, 255, 255, 0.5);

  h1 {
    font-size: 2rem;
    color: #000;
  }
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}
.ant-menu {
  background: transparent;
  border-bottom: none;
  font-size: 1.2rem;
}
</style>
