<template>
  <div class="outsideLink">
    <!-- Link to bilibili-->
    <div class="bilibili">
      <a href="https://space.bilibili.com/3494373465524892?spm_id_from=333.1007.0.0">
        <img src="\public\images\bilibili-brands-solid.svg" alt="bilibili" width="30" height="30" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.outsideLink {
  // locate it at the bottom left corner of the page
  position: absolute;
  left: 0;
  bottom: 0;
  // padding
  padding-left: 1%;
  padding-bottom: 1%;
}
.bilibili {
  // circle background
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  // center the icon
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
