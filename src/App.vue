<script setup>
import { RouterLink, RouterView } from 'vue-router'

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <header> 
      <nav>
        <div class="logo">
          <a href="#" @click.prevent="scrollToTop">Arthur</a>
        </div>
        <ul class="nav-links">
          <li><a href="#hello">Accueil</a></li>
          <li><a href="#my_projects">Projets</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
   
  </header> 

  <RouterView/>

</template>

<style scoped>

.logo a {
  color: var(--color-text);
  text-decoration: none;
}

.logo a:hover {
  text-decoration: none;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-text);
  font-family: 'Maitree', serif;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

a {
  color: var(--color-text);
  text-decoration: none;
  transition: all 300ms ease;
  font-family: 'Maitree', serif;
}

a:hover {
  color: #282A27;
  text-decoration: underline;
  text-underline-offset: 1rem;
}

nav, 
.nav-links {
  display: flex;
}

nav {
  justify-content: space-around;
  align-items: center;
  height: 17vh;
}

.nav-links {
  gap: 2rem;
  list-style: none;
  font-size: 1.5rem;
}

</style>