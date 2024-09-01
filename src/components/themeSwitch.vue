<template>
  <div>
    <label for="darkModeSwitch">Dark Mode:</label>
    <input id="darkModeSwitch" type="checkbox" v-model="isSwitchOn" @change="emitSwitchChange" />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'
// #region Dark mode switch
const emit = defineEmits(['switchChange'])

// get system default mode
const systemDefaultMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'

// get saved mode from localStorage, or use system default mode
const savedMode = localStorage.getItem('darkMode') || systemDefaultMode
const isSwitchOn = ref(savedMode === 'dark')

const emitSwitchChange = () => {
  emit('switchChange', isSwitchOn.value)
  // save mode to localStorage
  localStorage.setItem('darkMode', isSwitchOn.value ? 'dark' : 'light')
}
emitSwitchChange()

// #endregion
</script>
