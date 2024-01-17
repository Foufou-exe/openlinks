<template>
    <div class="w-full md:w-55/100 lg:pt-10 space-y-5">
        <h1 class="font-bold text-4xl leading-none md:mt-0">Organise, Share and Protect Your Favourite Links with Openlinks <span class="animate-pulse">✨</span></h1>
        <p class="text-lg font-normal">
            Your Link Manager Designed for Confidentiality and Flexibility. <br>
            OpenLinks revolutionises the way you save and access your favourite links. Designed for modern professionals, students and everyone in between, our platform lets you store links to anything - from essential articles and video tutorials to collaborative project pages - and find them easily at any time, on any device.
        </p>
        <Button type="button" class="flex items-center justify-center rounded-full ">
            <Icon name="circum:paperplane"  class="text-xl mr-1"/>
            Get Started
        </Button>
        <div class="flex items-end">
            <a href="">
                <Icon name="pajamas:github" class="text-3xl mr-2" />
            </a>
        </div>
    </div>
    <div class="hidden md:block md:w-full">
        <client-only>
            <Vue3Lottie :loop="false" animationLink="/json/index_image1.json" alt="OpenLinks"  class="ml-auto object-contain md:w-full lg:w-full"/>
        </client-only>
    </div>

</template>

<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
</script>