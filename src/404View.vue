<script setup lang="ts">
import outsideLinks from '@/components/outsideLinks.vue'
import animatedCirclesBackground from '@/components/animated-circles-background.vue'
</script>

<template>
  <div class="content">
    <h1>404</h1>
    <p>Page not found</p>
  </div>
  <animatedCirclesBackground />

  <!-- icons which connect to other websites -->
  <outsideLinks />
</template>

<style lang="scss">
body {
  background-color: #f0f0f0;
}

body.dark {
  background-color: #333;
}

.dark h1 {
  color: white;
}

.content {
  text-align: center;
  
}
</style>
