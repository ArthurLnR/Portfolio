<template>
  <div class="not-found">
    <h1>404</h1>
    <img src="../assets/dino404.png" alt="Dino 404" class="dino-image">
    <p>Oups ! La page que vous recherchez n'existe pas.</p>
    <RouterLink to="/">Retour à l'accueil</RouterLink>
  </div>
</template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 2rem;
    font-family: 'Bai Jamjuree', sans-serif;
  }
  
  h1 {
    font-size: 6rem;
    color: var(--color-text);
    font-family: 'Maitree', serif;
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  a {
    color: var(--color-text);
    text-decoration: underline;
    font-size: 1.2rem;
  }

  .dino-image {
  max-width: 150px;
  margin: 2rem 0;
}
  </style>