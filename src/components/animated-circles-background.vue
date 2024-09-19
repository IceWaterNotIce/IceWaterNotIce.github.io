<template>
  <canvas id="animated-circles-background"></canvas>
</template>

<style lang="scss">
#animated-circles-background {
  // make the canvas under the content
  z-index: -1;
  // make the canvas full of the parent element
  position: absolute;
  left: 0;
  top: 0;

  --circle-color: rgba(29, 28, 28, 0.5);
  --line-color: rgba(29, 28, 28, 0.5);
  --background-color: #f0f0f0;
}

.dark #animated-circles-background {
  --circle-color: rgba(255, 255, 255, 0.5);
  --line-color: rgba(255, 255, 255, 0.5);
  --background-color: #333;
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // get the canvas and its context
  var canvas = document.getElementById('animated-circles-background') as HTMLCanvasElement
  var ctx = canvas.getContext('2d')

  // make the canvas full of the parent element
  var parent = canvas.parentElement
  canvas.width = parent ? parent.clientWidth : 0
  canvas.height = parent ? parent.clientHeight : 0

  // resize the canvas when the window is resized ( not immediately )
  let resizeTimeout: number | null = null
  window.addEventListener('resize', function () {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout)
    }
    resizeTimeout = setTimeout(function () {
      canvas.width = parent ? parent.clientWidth : 0
      canvas.height = parent ? parent.clientHeight : 0
    }, 50)
  })

  // create circles
  var circles: {
    x: number
    y: number
    speed: number
    direction: number
    radius: number
  }[] = []
  for (var i = 0; i < 100; i++) {
    circles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() + 0.1,
      direction: Math.random() * Math.PI * 2,
      radius: 2, 
    })
  }

  // clear the canvas
  function clear() {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  //#region draw functions
  // draw the background
  function drawBackground() {
    if (ctx) {
      ctx.fillStyle = getComputedStyle(canvas).getPropertyValue('--background-color').trim()
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  }

  // draw the circle
  function drawCircle() {
    for (var i = 0; i < circles.length; i++) {
      var circle = circles[i]
      if (ctx) {
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fillStyle = getComputedStyle(canvas).getPropertyValue('--circle-color').trim()
        ctx.fill()
      }
    }
  }

  // update the circle's position
  // if it hits the wall, reverse its direction
  var mouse = { x: -100, y: -100 }
  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX - canvas.getBoundingClientRect().left
    mouse.y = e.clientY - canvas.getBoundingClientRect().top
  })

  // draw line between two points
  function drawLine() {
    for (var i = 0; i < circles.length; i++) {
      for (var j = i + 1; j < circles.length; j++) {
        var circle1 = circles[i]
        var circle2 = circles[j]
        var dx = circle1.x - circle2.x
        var dy = circle1.y - circle2.y
        var distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          if (ctx) {
            ctx.beginPath()
            ctx.moveTo(circle1.x, circle1.y)
            ctx.lineTo(circle2.x, circle2.y)
            ctx.strokeStyle =
              getComputedStyle(canvas).getPropertyValue('--line-color').trim() +
              (1 - distance / 100) +
              ')'
            ctx.stroke()
          }
        }
      }
    }
  }
  //#endregion

  // update the circle's position
  function update() {
    for (var i = 0; i < circles.length; i++) {
      var circle = circles[i]
      circle.x += Math.cos(circle.direction) * circle.speed
      circle.y += Math.sin(circle.direction) * circle.speed

      // if cirle near the mouse,
      var dx = circle.x - mouse.x
      var dy = circle.y - mouse.y
      var distance = Math.sqrt(dx * dx + dy * dy)
      if (
        distance < 100 &&
        circle.x > 0 &&
        circle.x < canvas.width &&
        circle.y > 0 &&
        circle.y < canvas.height
      ) {
        if (circle.x < mouse.x) {
          circle.x -= 1
        } else {
          circle.x += 1
        }
        if (circle.y < mouse.y) {
          circle.y -= 1
        } else {
          circle.y += 1
        }
      }

      // if circle hits the wall, reverse its direction
      if (circle.x <= 0 || circle.x > canvas.width) {
        circle.direction = Math.PI - circle.direction
        circle.speed = Math.random() + 0.1
      }
      if (circle.y <= 0 || circle.y > canvas.height) {
        circle.direction = -circle.direction
        circle.speed = Math.random() + 0.1
      }
    }
  }

  // draw the circle
  function draw() {
    clear()
    drawBackground()
    drawCircle()
    drawLine()
    update()
  }

  // call the draw function every 10ms
  setInterval(draw, 10)
})
</script>
