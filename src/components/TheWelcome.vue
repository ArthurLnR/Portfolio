<script setup>

</script>

<template>
    <section id="hello" class="welcome">
      <div class="section_container">
        <div class="content">
            <p class="subtitle">Bonjour,</p>
            <h1 class="title">
                Je suis <span>Arthur<br />un</span> Étudiant en Développement Web
             </h1>
            <p class="description">
                Bienvenue dans mon portfolio de développeur Web ! Je m'appelle Arthur, et je suis un étudiant passionné par le développement web. 
                Je m'engage à créer des sites Web esthétiques, réactifs et conviviaux. 
                Mon objectif est de continuer à apprendre et à affiner mes compétences pour offrir des expériences utilisateur exceptionnelles.
            </p>
        </div>
        <div class="image"> 
            <img src="../assets/Visage.jpg" alt="profile">
        </div>
      </div>
    </section>
</template>


<style scoped>

.section_container {
  min-height: 100vh;
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  font-family: 'Bai Jamjuree', sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.subtitle {
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 3rem;
  margin-bottom: 1rem;
}

.title span {
  font-weight: 600;
}

.description {
  line-height: 1.5rem;
  margin-bottom: 2rem;
}

.image {
  display: grid;
  place-items: center;
}

.image img {
  width: min(20rem, 90%);
  border-radius: 100%;
}

@media (width < 750px) {

  .section_container {
    padding: 10rem 1rem 5rem 1rem;
    text-align: center;
    grid-template-columns: repeat(1, 1fr);
  }

  .image {
    grid-area: 1/1/2/2;
  }
}

</style>

