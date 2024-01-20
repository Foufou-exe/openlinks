<template>
  <div class="container relative flex h-screen flex-col items-center justify-center md:grid md:grid-cols-1 lg:max-w-none lg:grid-cols-2 lg:px-0">
    <div class="relative hidden lg:h-full lg:flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <NuxtImg :src="imagesStore.currentImage" class="absolute inset-0 object-cover w-full h-full" />
      <div class="relative z-20">
        <LinkLogo />
      </div>
      <div class="relative z-20 mt-auto bg-black rounded-xl bg-opacity-40">
        <blockquote class="space-y-2 p-4">
          <p class="text-lg italic">
            &ldquo;{{ quotesStore.randomQuote.text }}&rdquo;
          </p>
          <footer class="text-sm">
            {{ quotesStore.randomQuote.author }}
          </footer>
        </blockquote>
      </div>
    </div>
    <div class="space-y-2 flex flex-col justify-center items-center">
      <UserAuthForm />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

import UserAuthForm from '@/components/auth/UserAuthForm.vue';
import LinkLogo from '@/components/LinkLogo.vue';

import { useImagesStore } from '@/stores/imagesStore.js';
import { useQuotesStore } from '@/stores/quotesStore.js';
const quotesStore = useQuotesStore();
const imagesStore = useImagesStore();

let quotesInterval, imagesInterval;

onMounted(() => {
  quotesInterval = setInterval(() => {
    quotesStore.changeQuote();
  }, 1 * 60 * 1000);

  // Change background images every 10 minutes
  imagesInterval = setInterval(() => {
    imagesStore.changeImage();
  }, 3 * 60 * 1000);
});

onUnmounted(() => {
  // Clean the gaps when the component is destroyed
  clearInterval(quotesInterval);
  clearInterval(imagesInterval);

});

useHead({
  title: 'Openlinks - Authentification',
})

definePageMeta({
  layout: 'none',
})
</script>

