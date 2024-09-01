<template>
  <canvas id="animated-circles-background"></canvas>
</template>

<style lang="scss">
#animated-circles-background {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Get the canvas element
  var canvas = document.getElementById('animated-circles-background')

  // get parent element's width and height
  var parent = canvas.parentElement
  canvas.width = parent.clientWidth
  canvas.height = parent.clientHeight

  var ctx = canvas.getContext('2d')

  // 50 random circles
  var circles = []
  for (var i = 0; i < 100; i++) {
    circles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: (Math.random() * 1000) / 10000 + 1,
      direction: Math.random() * Math.PI * 2,
      radius: 2,
      color: 'rgba(255, 255, 255, 0.5)'
    })
  }

  // draw the circle
  function drawCircle() {
    for (var i = 0; i < circles.length; i++) {
      var circle = circles[i]
      ctx.beginPath()
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
      ctx.fillStyle = circle.color
      ctx.fill()
    }
  }

  // update the circle's position
  // if it hits the wall, reverse its direction
  function update() {
    for (var i = 0; i < circles.length; i++) {
      var circle = circles[i]
      circle.x += Math.cos(circle.direction) * circle.speed
      circle.y += Math.sin(circle.direction) * circle.speed

      if (circle.x < 0 || circle.x > canvas.width) {
        circle.direction = Math.PI - circle.direction
      }
      if (circle.y < 0 || circle.y > canvas.height) {
        circle.direction = -circle.direction
      }
    }
  }

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
          ctx.beginPath()
          ctx.moveTo(circle1.x, circle1.y)
          ctx.lineTo(circle2.x, circle2.y)
          ctx.strokeStyle = 'rgba(255, 255, 255, ' + (1 - distance / 100) + ')'
          ctx.stroke()
        }
      }
    }
  }

  // if circle near mouse, let it move towards the mouse
  canvas.addEventListener('mousemove', function (e) {
    var x = e.clientX - canvas.getBoundingClientRect().left
    var y = e.clientY - canvas.getBoundingClientRect().top
    for (var i = 0; i < circles.length; i++) {
      var circle = circles[i]
      var dx = x - circle.x
      var dy = y - circle.y
      var distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 50 && distance > 10) {
        circle.direction = Math.atan2(dy, dx)
        circle.speed = distance / 50
      }
    }
  })

  // clear the canvas
  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  // draw the circle
  function draw() {
    clear()
    drawCircle()
    update()
    drawLine()
  }

  // call the draw function every 10ms
  setInterval(draw, 10)
})
</script>
