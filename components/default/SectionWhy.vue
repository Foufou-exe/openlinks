<template>
    <div class="grid grid-cols-1 gap-5">
        <div class="mb-10">
            <div class="flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-y-0 lg:space-x-3 p-5 text-center lg:text-left">
                <Icon name="circum:link" class="lg:text-7xl text-5xl" />
            </div>
            <div
                class="flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-y-0 lg:space-x-3 text-center">
                <div class="text-3xl lg:text-4xl font-bold">
                    <span>
                        Openlinks offers you a
                    </span>
                    <br>
                    <span ref="target">
                        <span id="rough1">Faster</span> and <span id="rough2">Safer</span> browsing experience
                    </span>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            <CardWhyVue 
                v-for="(component, index) in componentsHelp"
                :key="index"
                :title="component.title"
                :description="component.description"
                :icons="component.icons"
            />
        </div>
    </div>
</template>

<script setup>
import CardWhyVue from '@/components/default/why/CardWhy.vue.vue';
import { annotate, annotationGroup } from 'rough-notation'
import { onMounted, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const targetIsVisible = ref(false)


useIntersectionObserver(target, ([{ isIntersecting }]) => {
  targetIsVisible.value = isIntersecting
  const rough1 = annotate(target.value.querySelector('#rough1'), { type: 'highlight', color: '#17c18f', animationDuration: 2000, padding: 0 })
  const rough2 = annotate(target.value.querySelector('#rough2'), { type: 'highlight', color: '#17c18f', animationDuration: 2000, padding: 0 })
  const ag = annotationGroup([rough1, rough2]);
  if (isIntersecting) {
    ag.show()
  }
})


const componentsHelp = [
  {
    title: 'Uncompromising safety',
    icons: 'circum:lock',
    description:
      'Openlinks uses advanced encryption to protect your data. We use the latest type of encryption.',
  },
  {
    title: 'A Clean Interface',
    icons: 'circum:monitor',
    description:
      'We ve designed OpenLinks to be intuitively simple, eliminating the unnecessary so you can focus on what s important - your links.',
  },
  {
    title: 'Global Accessibility',
    icons: 'circum:microchip',
    description:
      'Stay connected to your essential information with OpenLinks, wherever you are and on any device.  Your links follow you whether you re on the move or at your desk.',
  },
  {
    title: 'Free to use',
    icons: 'circum:dollar',
    description:
      'Openlinks is free to use. We offer a premium plan for those who want to support us.',
  },
  {
    title: ' Quickly register your links',
    icons: 'circum:bookmark',
    description:
      'Openlinks lets you quickly register your links. You can register your links using our browser extension or by adding them manually.',
  },
  {
    title: 'Support 24/7',
    icons: 'circum:chat-1',
    description:
      'We offer 24/7 support. If you have any questions, please contact us. We use the latest type of encryption.',
  },
]
</script>

