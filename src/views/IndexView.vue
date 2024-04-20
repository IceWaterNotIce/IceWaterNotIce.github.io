<script setup lang="ts">
import { Layout } from 'ant-design-vue'
import { Menu } from 'ant-design-vue'

import { onMounted, ref } from 'vue'

const models = ref<string[]>([])
onMounted(() => {
  // get data from /models/models_list.csv
  fetch('public/models/models_preview_image_list.csv')
    .then((response) => response.text())
    .then((data) => {
      console.log(data)
      models.value = data.split('\n').map((item) => item.trim())
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
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

    <div class="aaa">
      
      <div class="card" v-for="model in models" :key="model" :style="{ backgroundImage: `url('${model}')` }">
      </div>
    </div>
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
.aaa {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.card {
  position: relative;
  flex: 1 1 350px;
  flex-shrink: 1;
  aspect-ratio: 16/9;
  max-width: 700px;
  max-height: 40vh;
  min-width: 350px;
  background-size: cover;
  background-color: aqua;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0.3%;
  margin: 0.1%;

  a {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
