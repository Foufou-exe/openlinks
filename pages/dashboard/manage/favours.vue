<template>
  <FormFavours />
</template>

<script lang="ts" setup>
import FormFavours from '@/components/dashboard/default/favours/FormFavours.vue';
// Page Meta
definePageMeta({
  layout: 'dashboard-layout',
})
// Head
useHead({
  title: 'Openlinks - Dashboard',
  meta: [
    {
      name: 'description',
      content: 'Openlink is a platform to share your link with the world.',
    },
  ],
})
</script>