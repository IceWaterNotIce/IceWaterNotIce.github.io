<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  // Your code here
  let module = import.meta.glob('/assets/images/comfyUI/*.png');
  console.log(module);
  return module;
});
</script>

<template>
  <div>
    <h1>Home</h1>
    <img alt="Vue logo" src="/assets/images/comfyUI/ComfyUI_00001_.png" />
  </div>
</template>
