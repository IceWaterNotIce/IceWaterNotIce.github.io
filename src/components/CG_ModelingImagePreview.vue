<script setup lang="ts">
import { Card, Carousel } from 'ant-design-vue'
import { onMounted, ref } from 'vue'

const images = ref()

onMounted(() => {
  // Get the current URL
  const url = window.location.href
  console.log(url)
  fetch(url + 'CG_ModelingImageFiles.json')
    .then((response) => response.json())
    .then((data) => {
      images.value = data
      console.log(images.value)
    })
})
</script>

<template>
  <div class="image-container">
    <Card v-for="(image, index) in images" :key="index">
      <img :src="image.path" alt="image" style="width: 100%; height: 100%" />
    </Card>
  </div>

  <Carousel>
    <template v-for="image in images" :key="image">
      <img :src="image.path" alt="image" style="width: 100%; height: 100%" />
    </template>
  </Carousel>
</template>

<style lang="scss" scoped>
.image-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
