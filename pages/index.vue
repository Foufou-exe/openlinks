<template>
    <!-- <MaintenceSite /> -->
    <div>
        <section id="about" class="flex min-h-screen w-full max-w-6xl items-center justify-center px-5 mb-10 md:px-6 mx-auto">
            <SectionAbout />
        </section>
        <section id="why" class="min-h-screen mx-auto flex max-w-6xl items-center p-5 mb-10 md:px-6" >
            <SectionWhy />
        </section>
        <section id="HowDoIUseIt" class="min-h-screen mx-auto flex max-w-6xl items-center p-5 mb-10 md:px-6">
            <SectionHowDoIUseIt />
        </section>
        <section id="security" class="min-h-screen mx-auto flex max-w-6xl items-center p-5 mb-10 md:px-6">
            <SectionSecurity />
        </section>
        <div class="dark:bg-neutral-900/50 bg-muted/10">
            <section id="catchPhrase" class="min-h-screen mx-auto flex max-w-6xl justify-center items-center p-5 md:px-6">
                <SectionCatchPhrase/>
            </section>
        </div>
        <div class="dark:bg-neutral-900/20 bg-muted/10">
            <section id="start" class="min-h-screen mx-auto justify-center flex max-w-6xl items-center p-5 md:px-6">
                <SectionStart />
            </section>
        </div>
    </div>
</template>

<script setup >
// Imported if the site is under maintenance
// import MaintenceSite from '@/components/MaintenceSite.vue'

import SectionAbout  from "@/components/default/SectionAbout.vue";
import SectionHowDoIUseIt from "@/components/default/SectionHowDoIUseIt.vue";
import SectionWhy from "@/components/default/SectionWhy.vue";
import SectionSecurity from "@/components/default/SectionSecurity.vue";
import SectionStart from "@/components/default/SectionStart.vue";
import SectionCatchPhrase from "@/components/default/SectionCatchPhrase.vue";

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