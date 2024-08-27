<script setup lang="ts">
import { Layout } from 'ant-design-vue'
import { Menu } from 'ant-design-vue'

import outsideLink from '@/components/outsideLink.vue'
</script>

<template>
  <Layout>
    <h1>ICEWATERNOTICE</h1>
    <div class="nav">
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </div>
  </Layout>

  <footer>
    <p>© 2021 ICEWATERNOTICE</p>
    <p>
      Contact:
      <a href="mailto:icewaternotice@gmail.com"> icewaternotice@gmail.com </a>
    </p>
  </footer>

  <outsideLink />
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

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}


</style>
