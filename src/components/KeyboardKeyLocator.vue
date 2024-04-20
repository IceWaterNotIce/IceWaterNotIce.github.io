<template>
  <keyboard :keys="keys"></keyboard>
</template>

<script>
import keyboard from '@/components/Keyboard.vue'
export default {
  name: 'KeyboardKeyLocator',
  components: {
    keyboard: keyboard
  },
  setup() {
    // get json data from .json file
    const keys = require('../../assets/others/qwertz.json')
    return {
      keys
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border: 1px solid black;
  width: 100%;
}

div {
  border: 1px solid black;
  width: 30px;
  text-align: center;
}
</style>
