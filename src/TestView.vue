<script setup lang="ts">
const audio = new Audio('..\\audios\\morale.mp3');
audio.preload = 'none';
</script>

<template>
  <div>
    <button @click="audio.play()">Play</button>
    <button @click="audio.pause()">Pause</button>
  </div>
</template>

<style scoped lang="scss">
</style>