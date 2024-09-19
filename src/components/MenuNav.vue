<template>
  <nav class="menu">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>

</script>

<style scoped>
.menu {
  background-color: #333;
  padding: 10px;
}

.menu ul {
  list-style-type: none;
  padding: 0;
}

.menu li {
  display: inline;
  margin-right: 20px;
}

.menu li a {
  color: white;
  text-decoration: none;
}

.menu li.active a {
  font-weight: bold;
  text-decoration: underline;
}
</style>
