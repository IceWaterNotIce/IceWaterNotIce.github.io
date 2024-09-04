<script setup lang="ts">
import { Menu, SubMenu } from 'ant-design-vue'

import outsideLinks from '@/components/outsideLinks.vue'
import animatedCirclesBackground from '@/components/animated-circles-background.vue'

import ThemeSwitch from '@/components/themeSwitch.vue'

const ThemeSwitchChange = (isSwitchOn: boolean) => {
  document.body.classList.toggle('dark', isSwitchOn)
}
if (localStorage.getItem('darkMode') === 'dark') {
  ThemeSwitchChange(true)
}

</script>

<template>
  <animatedCirclesBackground />
  <h1>ICEWATERNOTICE</h1>
  <div class="nav">
    <Menu mode="horizontal">
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">About</Menu.Item>
      <Menu.Item key="3">Contact</Menu.Item>
      <!-- Setting Menu -->
      <SubMenu key="4" title="Setting">
        <!-- Theme Switch -->
        <Menu.Item key="4-1">
          <ThemeSwitch @switchChange="ThemeSwitchChange" />
        </Menu.Item>
      </SubMenu>
    </Menu>
  </div>

  <footer>
    <p>
      Contact:
      <a href="mailto:icewaternotice@gmail.com"> icewaternotice@gmail.com </a>
    </p>
  </footer>

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

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}
.dark footer {
  background-color: #333;
  color: white;
}
</style>
