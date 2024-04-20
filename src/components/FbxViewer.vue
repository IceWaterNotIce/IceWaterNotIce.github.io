<script setup lang="ts">

import { onMounted } from 'vue'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/jsm/libs/stats.module.js'

// get model name form url params
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const modelName = urlParams.get('model');
console.log(modelName);
onMounted(() => {
  var container: any, stats: any, controls: any
  var camera: any, scene: any, renderer: any, light: any
  init()
  animate()
  function init() {
    container = document.getElementById('container')
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000)
    camera.position.set(0, 1.6, 0)
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xa0a0a0)
    scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000)
    light = new THREE.HemisphereLight(0xffffff, 0x444444)
    light.position.set(0, 20, 0)
    scene.add(light)
    light = new THREE.DirectionalLight(0xffffff)
    light.position.set(0, 20, 10)
    light.castShadow = true
    scene.add(light)

    var grid = new THREE.GridHelper(5, 20, 0x000000, 0x000000)
    grid.material.opacity = 0.2
    grid.material.transparent = true
    scene.add(grid)
    // model
    var loader = new FBXLoader()
    //loader.load('../models/ + props value + .fbx', function (object) {
    if (modelName) {
      loader.load("public/models/" + modelName, function (object) {
        object.traverse(function (child) {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })
        object.rotation.y = Math.PI / 2
        //object.rotation.x = -Math.PI/2 - Math.PI/12;
        object.position.set(0, -0.15, 0.3)
        console.log(object.position)
        object.scale.set(0.003, 0.003, 0.003)
        scene.add(object)
      })

      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.shadowMap.enabled = true
      container.appendChild(renderer.domElement)
      controls = new OrbitControls(camera, renderer.domElement)
      controls.target.set(0, 0, 0)
      controls.update()
      window.addEventListener('resize', onWindowResize, false)
      // stats
      stats = new Stats()
      container.appendChild(stats.dom)
    }
  }
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  //
  function animate() {
    requestAnimationFrame(animate)

    renderer.render(scene, camera)
    stats.update()
  }
})
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
html {
  overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: Arial, sans-serif;
  font-size: 13px;
  line-height: 20px;
  color: #333;
  background: #5ebd82;
}
</style>
