<template>
  <FormHistory />
</template>

<script lang="ts" setup>
import FormHistory from '@/components/dashboard/default/history/FormHistory.vue';
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