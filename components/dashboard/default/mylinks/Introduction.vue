<template>
  <div class="p-3 border-b mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
    <div>
      <h1 class="text-xl sm:text-3xl font-bold">My Links</h1>
      <p class="text-xs sm:text-sm text-gray-500">All your links are here</p>
    </div>
  </div>
  <NoneLinks />
</template>

<script lang="ts" setup>
import { NoneLinks } from "@components/dashboard/default";
</script>

