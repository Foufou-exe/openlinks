<template>
  <div
    class="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <!-- <div class="absolute inset-0 bg-cover" :class="imagesStore.currentImage"  /> -->
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
    <div class="space-y-2">
      <div class="flex justify-center items-center">
        <UserAuthForm />
      </div>
      <p class="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our
        <a href="/terms" class="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </a>
        and
        <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

import UserAuthForm from '@/components/auth/UserAuthForm.vue';
import LinkLogo from '@/components/LinkLogo.vue';

import { useQuotesStore, useImagesStore } from '@/stores/index.js';

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
  title: 'Devhub - Authentification',
})

definePageMeta({
  layout: 'none',
})
</script>

