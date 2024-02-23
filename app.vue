<template>
  <NuxtLayout >
    <NuxtPage />
  </NuxtLayout>
  <SpeedInsights />
</template>

<script lang="ts" setup>

// Module Vercel for SpeedInsights (collects data from Google PageSpeed Insights API and displays it in the Vercel dashboard.)
import { SpeedInsights } from "@vercel/speed-insights/next"
</script>