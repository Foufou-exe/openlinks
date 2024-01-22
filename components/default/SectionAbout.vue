<template>
    <div class="w-full md:w-55/100 space-y-5">
        <h1 class="font-bold text-4xl leading-none md:mt-0">Organise, Share and Protect your favourite links with Openlinks <span class="animate-pulse">✨</span></h1>
        <p class="text-lg font-normal text-muted-foreground">
            Revolutionize your online resource management with OpenLinks! Easily organize and access crucial content from any device. Ideal for professionals, students, and anyone else. Your go-to solution for confidential and adaptable link management.
        </p>
        <ButtonStart/>
    </div>
    <div class="hidden md:block md:w-full">
        <client-only>
            <Vue3Lottie :loop="false" animationLink="/json/index_image1.json" alt="OpenLinks"  class="ml-auto object-contain md:w-full lg:w-full"/>
        </client-only>
    </div>

</template>

<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import ButtonStart from '@/components/default/about/ButtonStart.vue'
</script>