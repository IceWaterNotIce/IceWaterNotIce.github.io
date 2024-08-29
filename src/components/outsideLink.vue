<template>
  <div class="outsideLink">
    <!-- Link to bilibili-->
    <div class="icon">
      <a href="https://space.bilibili.com/3494373465524892?spm_id_from=333.1007.0.0">
        <img src="\images\bilibili-brands-solid.svg" alt="bilibili"/>
      </a>
    </div>

    <div class="icon">
      <a href="https://github.com/IceWaterNotIce">
        <img src="\images\github-brands-solid.svg" alt="github"/>
      </a>
    </div>

    <div class="icon">
      <a href="https://www.instagram.com/icewaternotice/">
        <img src="\images/instagram-brands-solid.svg" alt="instagram"/>
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
  // size
  width: max-content;
  height: max-content;
}
.icon {
  // size
  width: 40px;
  height: 40px;
  // margin
  margin: 10px;
  // margin between icons
  background-color: #fff;
  border-radius: 50%;
  // center the icon
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 75%;
      height: 75%;
    }
  }
}
</style>
