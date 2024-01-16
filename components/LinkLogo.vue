<template>
    <a class="flex items-center text-lg font-medium space-x-2" href="/">
        <NuxtImg src="/icon.png"  class="w-[40px]"/>
        <h1>Openlinks {{ emojisStore.currentEmoji }}</h1>
    </a>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useEmojisStore } from '@/stores/index.js';

const emojisStore = useEmojisStore();

let emojisInterval

onMounted(() => {
  emojisInterval = setInterval(() => {
      emojisStore.changeEmoji();
  }, 1 * 60 * 1000);
});

onUnmounted(() => {
  clearInterval(emojisInterval);
});

</script>