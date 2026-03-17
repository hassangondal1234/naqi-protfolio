<template>
        <nav class="navbar">
      <h1>Muhammad Naqi</h1>
      <ul class="nav-links">
        <li><RouterLink to="/">Home</RouterLink></li>       
        <li><RouterLink to="/about">about</RouterLink></li>
        <li><RouterLink to="/project">project</RouterLink></li>
        <li><RouterLink to="/contact">contact</RouterLink></li>
      </ul>
    </nav>
</template>
<style scoped>

/* Navbar */
.navbar {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background: rgba(0,0,0,0.7);
  color: white;
  z-index: 10;
}
.nav-links {
  display: flex;
  gap: 30px;
  list-style: none;
}
.nav-links li {
  cursor: pointer;
  transition: 0.3s;
}
.nav-links li:hover {
  color: #00ff6a;
}
</style>