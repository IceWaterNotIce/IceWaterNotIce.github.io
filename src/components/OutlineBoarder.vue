<script setup lang="ts"></script>

<template>
  <div>
    <slot></slot>
    <span class="bottom"></span>
    <span class="right"></span>
    <span class="top"></span>
    <span class="left"></span>
  </div>
</template>

<style lang="scss">
div {
  width: fit-content;
  position: relative;
}

slot {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: hsl(236, 32%, 26%);
  padding: 0.35em 0.45em;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

slot:focus {
  outline: none;
}

slot::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
  position: absolute;
  background-color: #fc2f70;
  transform-origin: center;
  transition: transform 0.5s ease;
}

.bottom,
.top {
  height: 1px;
  left: 0;
  right: 0;
  transform: scaleX(0.1);
}

.left,
.right {
  width: 1px;
  top: 0;
  bottom: 0;
  transform: scaleY(0.3);
}

.top {
  top: 0;
  transform-origin: left;
}

.bottom {
  bottom: 0;
  transform-origin: right;
}

.left {
  left: 0;
  transform-origin: top;
}

.right {
  right: 0;
  transform-origin: bottom;
}

input:focus ~ .top,
input:focus ~ .bottom {
  transform: scaleX(1);
}

input:focus ~ .left,
input:focus ~ .right {
  transform: scaleY(1);
}
</style>
