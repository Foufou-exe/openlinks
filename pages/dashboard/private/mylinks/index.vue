<template>  
  <FormMyLinks />
</template>

<script setup lang="ts">
import FormMyLinks from '@/components/dashboard/default/mylinks/FormMyLinks.vue';
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
