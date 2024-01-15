<template>
    <MaintenceSite />
</template>

<script setup >
// Imported if the site is under maintenance
import MaintenceSite from '@/components/MaintenceSite.vue'

useSeoMeta({
    title: 'Openlinks',
    ogTitle: 'Openlinks',
    description: 'Openlinks - A place for developers to share ideas and learn new things',
    ogDescription: 'Openlinks - A place for developers to share ideas and learn new things',
    ogImage: '/icon.png',
    twitterCard: '/icon.png',
    ogUrl: '[og:https://Openlinks.com/]',
    twitterTitle: '[twitter:Openlinks]',
    twitterDescription: '[twitter:Openlinks - A place for developers to share ideas and learn new things]',
    // twitterImage: '[twitter:/icon.png]'
    })

useHead({
    htmlAttrs: {
        lang: 'en',
    },
})

// Activated if the site is under maintenance
definePageMeta({
  layout: 'none',
})
</script>