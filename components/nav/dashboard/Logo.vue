<template>
  <a class="flex items-center text-lg font-medium space-x-2" href="/dashboard">
    <NuxtImg src="/icon.png" class="w-[40px]" />
    <h1>Openlinks</h1>
    <transition name="message">
      <div v-if="showMessage" class="message">
        <span class="font-thin">{{ welcomeStore.lastWelcomeMessage.message }}</span>
      </div>
    </transition>
  </a>
</template>

<script lang="ts" setup>
import { useWelcomeStore } from '@/stores/welcomeStore.js';

const welcomeStore = useWelcomeStore();
const showMessage = ref(false);

onMounted(() => {
  welcomeStore.updateWelcomeMessage();
  const now = new Date();
  const today = now.toDateString();
  const messageInfo = welcomeStore.lastWelcomeMessage;
  
  // Utiliser localStorage pour vérifier si le message a déjà été affiché
  const shownMessage = localStorage.getItem('shownMessage');
  
  if (!shownMessage || shownMessage !== messageInfo.message + today) {
    showMessage.value = true;
    localStorage.setItem('shownMessage', messageInfo.message + today);
    
    setTimeout(() => {
      showMessage.value = false;
    }, 9500); // Cache le message après 5 secondes
  }
});
</script> 

<style>
/* Transition d'apparition */
.message-enter-active,
.message-leave-active {
  transition: opacity 0.5s ease;
}

.message-enter-from,
.message-leave-to {
  opacity: 0;
}

.message-enter-to,
.message-leave-from {
  opacity: 1;
}

/* Add additional styles to make the message more modern and stylish */
.message {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.message-enter-active {
  transform: translateY(-20px);
}

.message-leave-active {
  transform: translateY(20px);
}
</style>