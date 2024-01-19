<template>
    <!-- <MaintenceSite /> -->
    <div class="flex min-h-screen flex-col">
        <section id="about" class="min-h-screen mx-auto flex max-w-6xl items-center p-5 pt-16 pb-4 md:px-6 lg:px-8 lg:pt-12">
            <SectionAbout />
        </section>
        <section id="why" class="min-h-screen">
            <SectionWhy />
        </section>
        <section id="HowDoIUseIt" class="min-h-screen">
            <SectionHowDoIUseIt />
        </section>
        <section id="security" class="min-h-screen">
            <SectionSecurity />
        </section>
    </div>
</template>

<script setup >
// Imported if the site is under maintenance
// import MaintenceSite from '@/components/MaintenceSite.vue'

import SectionAbout  from "@/components/default/SectionAbout.vue";
import SectionHowDoIUseIt from "@/components/default/SectionHowDoIUseIt.vue";
import SectionWhy from "@/components/default/SectionWhy.vue";
import SectionSecurity from "@/components/default/SectionSecurity.vue";


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
// definePageMeta({
//   layout: 'none',
// })
</script>