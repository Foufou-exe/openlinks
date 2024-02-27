<template>
  <FormRecent />
</template>

<script lang="ts" setup>
import FormRecent from '@/components/dashboard/default/recent/FormRecent.vue';
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