<script setup>
import { ref } from 'vue'
import MyModal from './modals/MyModal.vue'
import espaceCommentaireImg from '../assets/Espace Commentaire.png'
import laSocketterieImg from '../assets/La socketterie.png'
import monCVImg from '../assets/MonCV.png'


const projects = ref([
  {
    id: 1,
    title: "Espace Commentaire",
    image: espaceCommentaireImg,
    githubLink: "https://github.com/ArthurLnR/Espace-commentaire",
    description: "Voici un espace commentaire dynamique"
  },
  {
    id: 2,
    title: "La socketterie",
    image: laSocketterieImg,
    githubLink: "",
    description: "Cahier des charges"
  },
  {
    id: 3,
    title: "Mon CV",
    image: monCVImg,
    githubLink: "https://github.com/ArthurLnR/Mon-CV",
    description: "Voici mon CV en ligne"
  }
]);

const selectedProject = ref({});
const isModalOpened = ref(false);

const openModal = (project) => {
  selectedProject.value = project;
  isModalOpened.value = true;
};

const closeModal = () => {
  isModalOpened.value = false;
};
</script>

<template>
  <div id="my_projects">
    <h2>Mes Projets</h2>
    <section v-for="project in projects" :key="project.id">
      <h3>{{ project.title }}</h3>
      <button @click="openModal(project)">
        <img :src="project.image" :alt="project.title" class="project-image">
      </button>
      <MyModal :currentProject="selectedProject" :isOpen="isModalOpened" @modal-close="closeModal">
        <template #header></template>
        <template #content></template>
        <template #footer></template>
      </MyModal>
    </section>
  </div>
</template>

<style scoped>
#my_projects {
    font-family: 'Bai Jamjuree', sans-serif;
    margin-bottom: 200px;
}
.project-image {
  width: 400px;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-image:hover {
  transform: scale(1.05);
}

.project-title {
    margin: 1rem;
}

.details-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.about-containers {
    display: flex;
    justify-content: center;
    gap: 7rem;
}

.btn {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  background-color: #212220;
  border: 1px solid #687066;
  border-radius: 15px;
}

.btn:hover {background-color: #2F312E}

.btn:active {
  background-color: #2F312E;
  transform: translateY(4px);
}

.btn-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

#my_projects h2 {
    text-align: center;
}
</style>
