<template>
    <h1>Hello World</h1>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Devhub',
    ogTitle: 'Devhub',
    description: 'Devhub - A place for developers to share ideas and learn new things',
    ogDescription: 'Devhub - A place for developers to share ideas and learn new things',
    ogImage: '/icon.png',
    twitterCard: '/icon.png',
    ogUrl: '[og:https://devhub.com/]',
    twitterTitle: '[twitter:Devhub]',
    twitterDescription: '[twitter:Devhub - A place for developers to share ideas and learn new things]',
    // twitterImage: '[twitter:/icon.png]'
    })

useHead({
    htmlAttrs: {
        lang: 'en',
    },
})
</script>