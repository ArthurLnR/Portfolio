<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
    isOpen: Boolean,
    currentProject: Object,
});

const emit = defineEmits(["modal-close"]);
const target = ref(null)

onClickOutside(target, () => emit('modal-close'))
</script>

<template>
  <div v-if="isOpen" class="modal">
      <div class="modal-content" ref="target">
          <div class="modal-header">
              <slot name="header">{{ currentProject.title }}</slot>
          </div>
          <div class="modal-body">
              <slot name="content">
                  <img :src="currentProject.image" :alt="currentProject.title" class="project-img">
                  <p>{{ currentProject.description }}</p>
              </slot>
          </div>
          <div class="modal-footer">
              <slot name="footer">
                  <div class="button-container">
                      <a :href="currentProject.githubLink" target="_blank" class="github-button">
                          <button class="btn">GitHub</button>
                      </a>
                      <button class="btn close-button" @click="emit('modal-close')">Fermer</button>
                  </div>
              </slot>
          </div>
      </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #181917;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
}

.close {
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.btn {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  background-color: #181917;
  border: 1px solid #454843;
  border-radius: 15px;
}

.btn:hover {background-color: #2F312E}

.btn:active {
  background-color: #2F312E;
  transform: translateY(4px);
}

.project-img {
    border-radius: 2rem;
    width: 250px;
    height: auto;
}

.button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.github-button {
    margin-right: auto;
}

.close-button {
    margin-left: auto;
}
</style>
