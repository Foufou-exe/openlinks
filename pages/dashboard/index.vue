<template>
  <FormDefault />
</template>

<script lang="ts" setup>
import FormDefault from '@/components/dashboard/default/FormDefault.vue';
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
